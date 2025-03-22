import { isCompletePageObject } from '@july_cm/react-notion';
import Link from 'next/link';

import css from './archives.module.scss';
import { MultipleRichText } from '../../../_components/notion';
import { cache } from '../../../libs/notion-cache';
import { client } from '../../../libs/notion-client';

import type { PageObjectResponse } from '@july_cm/react-notion';

const ArchiveItem: React.FC<{ article: PageObjectResponse }> = ({ article }) => {
  const { properties } = article;
  const time = properties['Published Date'].type === 'date' ? properties['Published Date'].date.start : '- -';
  const title = properties['Name'].type === 'title' ? properties['Name'].title : '- -';
  const description =
    properties['Description'].type === 'rich_text' ? properties['Description'].rich_text : '- -';
  return (
    <div className={css['archives-item']}>
      {/* time */}
      <div className={css['time']}>{time}</div>
      {/* title */}
      <div className={css['title']}>
        <Link href={`/article/${article.id}`}>
          {Array.isArray(title) ? <MultipleRichText blocks={title} /> : title}
        </Link>
      </div>
      {/* description */}
      <div className={css['description']}>
        {Array.isArray(description) ? <MultipleRichText blocks={description} /> : description}
      </div>
    </div>
  );
};

const ArchiveList = async () => {
  const { results: articles } = await cache(client.databases.query, {
    key: 'archive-list',
    cache: false,
  })({
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

  return articles
    .filter(isCompletePageObject)
    .map((article) => <ArchiveItem key={article.id} article={article} />);
};

const Archives = () => {
  return (
    <div className={css['archives']}>
      <ArchiveList />
    </div>
  );
};

export { Archives };
