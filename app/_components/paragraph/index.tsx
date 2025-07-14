import type { HTMLAttributes } from 'react';

import clsx from 'clsx';

import { Link } from './link';
import { Text } from './text';

import './paragraph.css';

type IParagraph = React.FC<HTMLAttributes<HTMLParagraphElement>> & {
  Text: typeof Text;
  Link: typeof Link;
};

export const Paragraph: IParagraph = ({ className, ...props }) => {
  return <p className={clsx('paragraph', className)} {...props} />;
};

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

Paragraph.Text = Text;
Paragraph.Link = Link;
