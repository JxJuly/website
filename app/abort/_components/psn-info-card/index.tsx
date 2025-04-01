import { clsx } from 'clsx';
import { Trophy } from 'lucide-react';
import * as psnApi from 'psn-api';

import './index.scss';

const TrophyCount: React.FC<{ type: string; count: number }> = ({ type, count }) => {
  return (
    <div className={clsx('trophy-count', type)}>
      <Trophy className="trophy-icon" />
      <span>{count}</span>
    </div>
  );
};

const GameInfo: React.FC<{ game: any }> = ({ game }) => {
  return (
    <div className="game-item">
      <div className="game-cover" style={{ backgroundImage: `url(${game.localizedImageUrl})` }}></div>
      <div className="game-info">
        <div className="game-name">{game.localizedName}</div>
        <div>
          <div className="game-progress-info">
            <div className="game-trophies">
              <TrophyCount type="platinum" count={5} />
              <TrophyCount type="gold" count={5} />
              <TrophyCount type="silver" count={5} />
              <TrophyCount type="bronze" count={5} />
            </div>
            <div className="game-progress-num">75%</div>
          </div>
          <div className="game-progress">
            <div></div>
          </div>
        </div>
      </div>
      <div className="game-time">200h</div>
    </div>
  );
};

const TROPHY_LEVELS = ['platinum', 'gold', 'silver', 'bronze'];
export const PsnInfoCard = async () => {
  const accessCode = await psnApi.exchangeNpssoForAccessCode(process.env.PSN_NPSSO);
  const authorization = await psnApi.exchangeAccessCodeForAuthTokens(accessCode);
  const { profile } = await psnApi.getProfileFromUserName(authorization, 'me');
  const avatar = profile.avatarUrls[0]?.avatarUrl;

  const trophySummary = profile.trophySummary.earnedTrophies;

  const recentlyPlayedGames = await psnApi.getUserPlayedGames(authorization, 'me', {
    offset: 0,
    limit: 50,
    categories: 'ps4_game, ps5_native_game',
  });
  const games = recentlyPlayedGames.titles;
  console.log('jxj', games);
  // const recentlyPlayedGamesSorted =

  return (
    <div className="psn-info-card">
      <div className="profile">
        <div className="my-avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
        <div className="my-info">
          <div className="my-id">{profile.onlineId}</div>
          <div className="my-trophies">
            {TROPHY_LEVELS.map((type) => (
              <TrophyCount type={type} count={trophySummary[type]} />
            ))}
          </div>
        </div>
      </div>
      <div className="game-list">
        {games.map((game) => (
          <GameInfo game={game} />
        ))}
      </div>
    </div>
  );
};
