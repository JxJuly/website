import cls from 'clsx';
import Image from 'next/image';

import avatarImage from './avatar.png';
import css from './my-avarar.module.scss';

import type { ImageProps } from 'next/image';

type MyAvatarProps = Omit<ImageProps, 'src' | 'alt'> & {
  type?: 'circle';
};

export const MyAvatar: React.FC<MyAvatarProps> = ({ className, type, ...props }) => {
  return (
    <Image
      src={avatarImage}
      alt="avatar"
      className={cls(className, type === 'circle' && css['circle'])}
      {...props}
    />
  );
};
