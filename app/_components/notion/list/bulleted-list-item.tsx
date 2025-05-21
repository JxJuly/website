'use client';

import { BulletedListItem as BaseBulletedListItem } from '../../bulleted-list-item';
import { MultipleRichText } from '../rich-text';

import type { BulletedListItemBlockObjectResponse } from '@july_cm/react-notion';

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
    <BaseBulletedListItem>
      <MultipleRichText blocks={text} />
      {children}
    </BaseBulletedListItem>
  );
};
