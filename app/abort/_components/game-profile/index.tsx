import { PsnProfile } from '@july_cm/react-game-profile/psn';
import { SteamProfile } from '@july_cm/react-game-profile/steam';

import './index.scss';
import '@july_cm/react-game-profile/psn/psn.css';
import '@july_cm/react-game-profile/steam/steam.css';

export const GameProfile = async () => {
  return (
    <div className="abort-game-profile">
      <PsnProfile npsso={process.env.PSN_NPSSO} />
      <SteamProfile apiKey={process.env.STEAM_API_KEY} steamId={process.env.STEAM_USER_ID} />
    </div>
  );
};
