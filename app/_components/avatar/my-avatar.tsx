import avatarImage from './avatar.png';
import { CommonAvatar, type CommonAvatarProps } from './common-avatar';

type MyAvatarProps = Omit<CommonAvatarProps, 'src' | 'alt'>;

export const MyAvatar: React.FC<MyAvatarProps> = (props) => {
  return <CommonAvatar src={avatarImage} alt="avatar" {...props} />;
};
