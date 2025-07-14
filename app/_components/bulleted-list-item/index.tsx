import type { HTMLAttributes } from 'react';

import { clsx } from 'clsx';

import './bulleted-list-item.css';

export const BulletedListItem: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={clsx('bulleted-list-item', className)} {...props} />;
};
