import { MultipleRichText } from '../rich-text';

import type { INumberedListItemBlock } from '@july_cm/react-notion';

import './numbered-list-item.css';

export const NumberedListItem: INumberedListItemBlock = ({ block, children }) => {
  return (
    <div className="numbered-item">
      <MultipleRichText blocks={block.numbered_list_item.rich_text} />
      {children}
    </div>
  );
};
