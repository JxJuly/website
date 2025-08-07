import React from 'react';

import { MultipleRichText } from '../rich-text';

import type { IParagraphBlock } from '@july_cm/react-notion';

import './paragraph.css';

export const Paragraph: IParagraphBlock = ({ block, ...props }) => {
  const { paragraph } = block;
  const { rich_text: text } = paragraph;
  return (
    <p className="paragraph" {...props}>
      <MultipleRichText blocks={text} />
    </p>
  );
};
