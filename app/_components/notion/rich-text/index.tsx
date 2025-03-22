import React, { useMemo } from 'react';

import cls from 'clsx';

import './rich-text.scss';

import type { RichTextItemResponse } from '@july_cm/react-notion';

type BaseTextProps = {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
} & (React.HTMLAttributes<HTMLSpanElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>);

const BaseText: React.FC<React.PropsWithChildren<BaseTextProps>> = ({
  bold,
  code,
  italic,
  strikethrough,
  underline,
  className,
  ...props
}) => {
  const { href } = props;
  const Component = useMemo(() => (href ? 'a' : 'span'), [href]);

  return (
    <Component
      className={cls(
        'notion-rich-text',
        {
          bold,
          code,
          italic,
          strikethrough,
          underline,
          href: !!href,
        },
        className
      )}
      {...props}
    />
  );
};

type RichTextProps = {
  block: RichTextItemResponse;
} & React.HTMLAttributes<HTMLSpanElement>;

const RichText: React.FC<RichTextProps> = ({ block, ...props }) => {
  const { type, plain_text: text, annotations, href } = block;
  if (type === 'mention' || type === 'equation') {
    return null;
  }
  return (
    <BaseText href={href} {...annotations} {...props}>
      {text}
    </BaseText>
  );
};

const MultipleRichText: React.FC<{ blocks: RichTextItemResponse[] }> = ({ blocks }) => {
  return blocks.map((block) => <RichText key={block.plain_text} block={block} />);
};

export { RichText, MultipleRichText };
