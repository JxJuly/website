import { chunk } from 'lodash-es';
import Image from 'next/image';
import {
  exchangeNpssoForAccessCode,
  exchangeAccessCodeForAuthTokens,
  getUserPlayedGames,
  getUserTrophiesForSpecificTitle,
  getProfileFromUserName,
} from 'psn-api';

import { WebsiteLayout, CommonAvatar } from '../_components';
import { cache } from '../_libs/api-cache';
import { BronzeTrophy, SilverTrophy, GoldTrophy, PlatinumTrophy } from './_components/trophy';

import './page.css';

function isoDurationToHours(duration) {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const [, h = '0', m = '0', s = '0'] = duration.match(regex) || [];

  const hours = Number(h) + Number(m) / 60 + Number(s) / 3600;

  // 保留 1 位小数，向上进位
  return Math.ceil(hours * 10) / 10;
}

const Page = async () => {
  const authorization = await cache(
    async () => {
      const accessCode = await exchangeNpssoForAccessCode(process.env.PSN_NPSSO);
      const authorization = await exchangeAccessCodeForAuthTokens(accessCode);
      return authorization;
    },
    {
      key: 'psn-api-auth',
    }
  );

  const profile = await cache(
    async () => {
      const res = await getProfileFromUserName(authorization, 'me');

      return res.profile;
    },
    {
      key: 'psn-api-profile',
    }
  );

  const myGames = await cache(
    async () => {
      const res = await getUserPlayedGames(authorization, 'me', {
        limit: 50,
        offset: 0,
      });
      return res.titles;
    },
    {
      key: 'psn-api-game',
    }
  );

  const myGamesWithTrophies = await cache(
    async () => {
      const gameGroup = chunk(myGames, 5);
      const res = await Promise.all(
        gameGroup.map(async (group) => {
          const trophies = await getUserTrophiesForSpecificTitle(authorization, 'me', {
            npTitleIds: group.map((i) => i.titleId).join(','),
            includeNotEarnedTrophyIds: true,
          });
          return group
            .map((i) => {
              const currentTrophies = trophies.titles.find((title) => title.npTitleId === i.titleId);
              return {
                game: i,
                trophies: currentTrophies?.trophyTitles?.[0],
              };
            })
            .filter((i) => i.trophies);
        })
      );
      const data = res
        .flat()
        .sort((a, b) => b.trophies.progress - a.trophies.progress)
        .slice(0, 30)
        .sort(
          (a, b) =>
            new Date(b.game.lastPlayedDateTime).getTime() - new Date(a.game.lastPlayedDateTime).getTime()
        );
      return data;
    },
    {
      key: 'psn-api-trophies',
    }
  );

  return (
    <WebsiteLayout>
      <div className="game-profile">
        <CommonAvatar
          src={profile.avatarUrls[0].avatarUrl}
          alt="PlayStation Profile Avatar"
          width={80}
          height={80}
          type="circle"
        />
        <div>
          <div className="profile-name">
            {profile.personalDetail.firstName} {profile.personalDetail.lastName}
            <span className="online-id">{profile.onlineId}</span>
          </div>
          <div className="profile-description">{profile.aboutMe}</div>
          <div className="profile-lv">Lv {profile.trophySummary.level}</div>
          <div className="profile-trophies">
            <PlatinumTrophy size="large" count={profile.trophySummary.earnedTrophies.platinum} />
            <GoldTrophy size="large" count={profile.trophySummary.earnedTrophies.gold} />
            <SilverTrophy size="large" count={profile.trophySummary.earnedTrophies.silver} />
            <BronzeTrophy size="large" count={profile.trophySummary.earnedTrophies.bronze} />
          </div>
        </div>
      </div>
      <div className="game-list">
        {myGamesWithTrophies.map((item) => {
          return (
            <div className="game-summary" key={item.game.titleId}>
              <Image src={item.game.imageUrl} alt={item.game.name} width={240} height={240} />
              <div className="game-info">
                <div className="game-name">{item.game.name}</div>
                <div className="game-trophies">
                  <PlatinumTrophy size="small" count={item.trophies.earnedTrophies.platinum} />
                  <GoldTrophy size="small" count={item.trophies.earnedTrophies.gold} />
                  <SilverTrophy size="small" count={item.trophies.earnedTrophies.silver} />
                  <BronzeTrophy size="small" count={item.trophies.earnedTrophies.bronze} />
                </div>
                <div className="game-progress">
                  <div className="progress-line">
                    <div className="progress-content" style={{ width: `${item.trophies.progress}%` }}></div>
                  </div>
                  <div className="progress-detail">
                    <div>{item.trophies.progress}%</div>
                    <div>{isoDurationToHours(item.game.playDuration)}H</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </WebsiteLayout>
  );
};

export default Page;
