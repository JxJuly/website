import { isCompletePageObject } from '@july_cm/react-notion';

import { WebsiteLayout } from '../_components/website-layout';
import { ArticleItem } from './_components/article-item';
import { cache } from '../_libs/api-cache';
import { client } from '../_libs/notion-client';

const Page = async () => {
  const { results: articles } = await cache(
    () =>
      client.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
          property: 'Published',
          type: 'checkbox',
          checkbox: {
            equals: true,
          },
        },
        sorts: [{ property: 'Published Date', direction: 'descending' }],
      }),
    {
      key: 'archive-list',
    }
  );

  return (
    <WebsiteLayout>
      {articles.filter(isCompletePageObject).map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </WebsiteLayout>
  );
};

export default Page;
