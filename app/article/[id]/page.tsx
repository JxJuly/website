import { Notion, NotionRenderProvider } from '@july_cm/react-notion';

import { ArticleHeader } from './_components/article-header';
import { WebsiteLayout } from '../../_components';
import {
  Paragraph,
  Divider,
  Heading,
  BulletedListItem,
  Image,
  ColumnList,
  Column,
  Quote,
  Code,
} from '../../_components/notion';
import { client } from '../../_libs/notion-client';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <WebsiteLayout>
      <ArticleHeader id={id} />
      <NotionRenderProvider
        components={{
          heading_1: Heading,
          heading_2: Heading,
          heading_3: Heading,
          paragraph: Paragraph,
          bulleted_list_item: BulletedListItem,
          image: Image,
          column_list: ColumnList,
          column: Column,
          quote: Quote,
          code: Code,
          divider: Divider,
        }}
      >
        <Notion blockId={id} client={client} />
      </NotionRenderProvider>
    </WebsiteLayout>
  );
}
