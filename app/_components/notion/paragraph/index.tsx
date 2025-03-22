'use client';

import React from 'react';

import cls from 'clsx';

import { MultipleRichText } from '../rich-text';

import type { ParagraphBlockObjectResponse } from '@july_cm/react-notion';

import './paragraph.scss';

type BaseParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

const BaseParagraph: React.FC<React.PropsWithChildren<BaseParagraphProps>> = ({ className, ...props }) => {
  return <p className={cls('notion-paragraph', className)} {...props} />;
};

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
