'use client';

import React from 'react';

import { MultipleRichText } from '../rich-text';

import type { HeadingBlockObjectResponse } from '@july_cm/react-notion';

import './heading.css';

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

  return React.createElement(El, {
    className: 'notion-heading',
    children: <MultipleRichText blocks={text} />,
  });
};

export { Heading };
