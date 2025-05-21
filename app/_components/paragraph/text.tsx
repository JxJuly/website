import type { HTMLAttributes } from 'react';

import { clsx } from 'clsx';

export interface TextCustomProps {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
}

export type TextProps = TextCustomProps & HTMLAttributes<HTMLSpanElement>;

export const Text: React.FC<TextProps> = ({
  className,
  bold,
  code,
  italic,
  strikethrough,
  underline,
  ...props
}) => {
  return (
    <span
      className={clsx(
        'text',
        {
          bold,
          code,
          italic,
          strikethrough,
          underline,
        },
        className
      )}
      {...props}
    />
  );
};
