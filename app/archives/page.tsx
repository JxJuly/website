import { isFullPage } from '@july_cm/react-notion';

import { WebsiteLayout } from '../_components/website-layout';
import { ArticleItem } from './_components/article-item';
import { cache } from '../_libs/api-cache';
import { client } from '../_libs/notion-client';

const Page = async () => {
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

  return (
    <WebsiteLayout>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </WebsiteLayout>
  );
};

export default Page;
