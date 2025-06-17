import { clsx } from 'clsx';
import Image from 'next/image';

import './common-avatar.css';

import type { ImageProps } from 'next/image';

export type CommonAvatarProps = ImageProps & {
  type?: 'circle';
};

export const CommonAvatar: React.FC<CommonAvatarProps> = ({ className, type, ...props }) => {
  return <Image className={clsx('common-avatar', className, type)} {...props} />;
};
