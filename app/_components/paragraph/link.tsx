import { Text } from './text';

import type { TextProps } from './text';

export type LinkProps = {
  href?: string;
} & TextProps;

export const Link: React.FC<LinkProps> = ({ href, ...props }) => {
  return (
    <a className="link" href={href} target="_blank">
      <Text {...props} />
    </a>
  );
};
