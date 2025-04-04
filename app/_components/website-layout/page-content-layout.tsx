import type { HTMLAttributes } from 'react';

export const PageContentLayout: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className="page-content-layout" {...props} />;
};
