'use client';

import { MultipleRichText } from '../rich-text';

import type { QuoteBlockObjectResponse } from '@july_cm/react-notion';

import './quote.scss';

interface QuoteProps {
  block: QuoteBlockObjectResponse;
}

const Quote: React.FC<QuoteProps> = ({ block }) => {
  const { quote } = block;
  const { rich_text: text } = quote;
  return (
    <div className="notion-quote">
      <MultipleRichText blocks={text} />
    </div>
  );
};

export { Quote };
