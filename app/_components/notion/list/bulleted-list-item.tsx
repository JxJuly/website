'use client';

import { MultipleRichText } from '../rich-text';

import type { BulletedListItemBlockObjectResponse } from '@july_cm/react-notion';

import './bulleted-list-item.scss';

interface BulletedListItemProps {
  block: BulletedListItemBlockObjectResponse;
}

export const BulletedListItem: React.FC<React.PropsWithChildren<BulletedListItemProps>> = ({
  block,
  children,
}) => {
  const { bulleted_list_item: item } = block;
  const { rich_text: text } = item;

  return (
    <div className="notion-bulleted-list-item">
      <MultipleRichText blocks={text} />
      {children}
    </div>
  );
};
