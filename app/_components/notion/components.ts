import { Code } from './code';
import { Column, ColumnList } from './column';
import { Divider } from './divider';
import { Heading1, Heading2, Heading3 } from './heading';
import { Image } from './image';
import { BulletedListItem, NumberedListItem } from './list';
import { Paragraph } from './paragraph';
import { Quote } from './quote';
import { Table, TableRow } from './table';

import type { NotionComponents } from '@july_cm/react-notion';

export const components: NotionComponents = {
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  paragraph: Paragraph,
  bulleted_list_item: BulletedListItem,
  numbered_list_item: NumberedListItem,
  image: Image,
  column_list: ColumnList,
  column: Column,
  quote: Quote,
  code: Code,
  table: Table,
  table_row: TableRow,
  divider: Divider,
};
