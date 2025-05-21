import { isCompletePageObject } from '@july_cm/react-notion';

import css from './article-header.module.scss';
import { MultipleRichText } from '../../../../_components/notion';
import { client } from '../../../../_libs/notion-client';

interface ArticleHeaderProps {
  id: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = async ({ id }) => {
  const page = await client.pages.retrieve({ page_id: id });

  if (!isCompletePageObject(page)) {
    return null;
  }

  const { properties } = page;
  const time = properties['Published Date'].type === 'date' ? properties['Published Date'].date.start : '- -';
  const title = properties['Name'].type === 'title' ? properties['Name'].title : '- -';

  return (
    <div>
      <div className={css['time']}>{time}</div>
      <div className={css['title']}>{Array.isArray(title) ? <MultipleRichText blocks={title} /> : title}</div>
    </div>
  );
};
