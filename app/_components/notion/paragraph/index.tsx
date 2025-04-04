'use client';

import React from 'react';

import { Paragraph as BaseParagraph, type ParagraphProps as BaseParagraphProps } from '../../paragraph';
import { MultipleRichText } from '../rich-text';

import type { ParagraphBlockObjectResponse } from '@july_cm/react-notion';

type ParagraphProps = {
  block: ParagraphBlockObjectResponse;
} & BaseParagraphProps;

const Paragraph: React.FC<ParagraphProps> = ({ block, ...props }) => {
  const { paragraph } = block;
  const { rich_text: text } = paragraph;
  return (
    <BaseParagraph {...props}>
      <MultipleRichText blocks={text} />
    </BaseParagraph>
  );
};

export { Paragraph, type ParagraphProps };
