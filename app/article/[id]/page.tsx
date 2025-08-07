import { NotionRenderer, isFullPage } from '@july_cm/react-notion';

import { ArticleHeader } from './_components/article-header';
import { WebsiteLayout } from '../../_components';
import { components } from '../../_components/notion';
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

export const generateMetadata = async ({ params }: PageProps) => {
  const { id } = await params;
  const page = await client.pages.retrieve({ page_id: id });

  if (
    isFullPage(page) &&
    page.properties['Name'].type === 'title' &&
    page.properties['Name'].title[0].plain_text
  ) {
    return {
      title: page.properties['Name'].title[0].plain_text,
    };
  }

  return {
    title: 'Article',
  };
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <WebsiteLayout>
      <ArticleHeader id={id} />
      <NotionRenderer
        auth={process.env.NOTION_TOKEN}
        blockId={id}
        components={components}
        verbose={process.env.NODE_ENV === 'development'}
      />
    </WebsiteLayout>
  );
}
