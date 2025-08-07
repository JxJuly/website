import React from 'react';

import { type RichTextItemResponse, isTextRichTextItemResponse } from '@july_cm/react-notion';

import { PlainText } from './plain-text';

type RichTextProps = {
  block: RichTextItemResponse;
} & React.HTMLAttributes<HTMLSpanElement>;

const RichText: React.FC<RichTextProps> = ({ block, ...props }) => {
  if (isTextRichTextItemResponse(block)) {
    return <PlainText block={block} {...props} />;
  }
  return null;
};

const MultipleRichText: React.FC<{ blocks: RichTextItemResponse[] }> = ({ blocks }) => {
  return blocks.map((block) => <RichText key={block.plain_text} block={block} />);
};

export { RichText, MultipleRichText };
