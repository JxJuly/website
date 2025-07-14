import { NotionRenderer, isFullPage } from '@july_cm/react-notion';

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
import { cache } from '../../_libs/api-cache';
import { client } from '../../_libs/notion-client';

export const generateStaticParams = async () => {
  const articles = await cache(
    async () => {
      const res = await client.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
          property: 'Published',
          type: 'checkbox',
          checkbox: {
            equals: true,
          },
        },
        sorts: [{ property: 'Published Date', direction: 'descending' }],
      });
      return res.results.filter(isFullPage);
    },
    {
      key: 'archive-list',
    }
  );

  return articles.map((i) => ({ id: i.id }));
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <WebsiteLayout>
      <ArticleHeader id={id} />
      <NotionRenderer
        auth={process.env.NOTION_TOKEN}
        blockId={id}
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
      />
    </WebsiteLayout>
  );
}
