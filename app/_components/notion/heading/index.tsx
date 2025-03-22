'use client';

import { MultipleRichText } from '../rich-text';

import type { HeadingBlockObjectResponse } from '@july_cm/react-notion';

import './heading.scss';

interface HeadingProps {
  block: HeadingBlockObjectResponse;
}

const HEADING_MAP = {
  heading_1: 'h1',
  heading_2: 'h2',
  heading_3: 'h3',
};

const Heading: React.FC<HeadingProps> = ({ block }) => {
  const text = block[block.type].rich_text;
  const El = HEADING_MAP[block.type];

  return (
    <El className="notion-heading">
      <MultipleRichText blocks={text} />
    </El>
  );
};

export { Heading };
