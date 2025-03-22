'use client';

import './column.scss';

const Column: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="notion-column">{children}</div>;
};

const ColumnList: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="notion-column-list">{children}</div>;
};

export { Column, ColumnList };
