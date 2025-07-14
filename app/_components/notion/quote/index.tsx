'use client';

import { MultipleRichText } from '../rich-text';

import type { IQuoteBlock } from '@july_cm/react-notion';

import './quote.css';

const Quote: IQuoteBlock = ({ block }) => {
  const { quote } = block;
  const { rich_text: text } = quote;
  return (
    <div className="notion-quote">
      <MultipleRichText blocks={text} />
    </div>
  );
};

export { Quote };
