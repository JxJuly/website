import { clsx } from 'clsx';
import Image from 'next/image';

import bronzeImg from './bronze.png';
import goldImg from './gold.png';
import platinumImg from './platinum.png';
import silverImg from './silver.png';

import type { ImageProps } from 'next/image';

import './trophy.css';

type CommonTrophyProps = Omit<ImageProps, 'width' | 'height'> & {
  /** 大小 */
  size?: 'small' | 'normal' | 'large';
  /** 数量 */
  count?: number;
};

const IMAGE_SIZE_MAP = {
  small: 12,
  normal: 14,
  large: 24,
};

const CommonTrophy: React.FC<CommonTrophyProps> = ({ className, size = 'normal', count, ...props }) => {
  const showCount = count !== undefined;
  const imageSize = IMAGE_SIZE_MAP[size];
  return (
    <div className={clsx('playstation-trophy', size, className)}>
      {showCount && <span>{count}</span>}
      <Image width={imageSize} height={imageSize} {...props} />
    </div>
  );
};

type TrophyProps = Pick<CommonTrophyProps, 'size' | 'count'>;
export const BronzeTrophy: React.FC<TrophyProps> = (props) => (
  <CommonTrophy src={bronzeImg} alt="bronze trophy" {...props} />
);
export const SilverTrophy: React.FC<TrophyProps> = (props) => (
  <CommonTrophy src={silverImg} alt="silver trophy" {...props} />
);
export const GoldTrophy: React.FC<TrophyProps> = (props) => (
  <CommonTrophy src={goldImg} alt="gold trophy" {...props} />
);
export const PlatinumTrophy: React.FC<TrophyProps> = (props) => (
  <CommonTrophy src={platinumImg} alt="platinum trophy" {...props} />
);
