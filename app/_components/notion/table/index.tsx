import { MultipleRichText } from '../rich-text';

import type { ITableBlock, ITableRowBlock } from '@july_cm/react-notion';

import './table.css';

export const Table: ITableBlock = ({ children, block }) => {
  return (
    <div className="table" style={{ gridTemplateColumns: `repeat(${block.table.table_width}, 1fr)` }}>
      {children}
    </div>
  );
};

export const TableRow: ITableRowBlock = ({ block }) => {
  return (
    <div className="table-row">
      {block.table_row.cells.map((i, idx) => (
        <div className="table-cell" key={idx}>
          <MultipleRichText blocks={i} />
        </div>
      ))}
    </div>
  );
};
