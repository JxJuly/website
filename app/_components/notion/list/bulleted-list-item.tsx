import { MultipleRichText } from '../rich-text';

import type { IBulletedListItemBlock } from '@july_cm/react-notion';

import './bulleted-list-item.css';

export const BulletedListItem: IBulletedListItemBlock = ({ block, children }) => {
  const { bulleted_list_item: item } = block;
  const { rich_text: text } = item;

  return (
    <div className="bulleted-list-item">
      <MultipleRichText blocks={text} />
      {children}
    </div>
  );
};
