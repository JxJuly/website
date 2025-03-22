import css from './article-header.module.scss';
import { MultipleRichText } from '../../../../_components/notion';
import { client } from '../../../../libs/notion-client';

// import { isCompletePageObject } from '@july_cm/react-notion';

interface ArticleHeaderProps {
  id: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = async ({ id }) => {
  const page = await client.pages.retrieve({ page_id: id });

  const { properties } = page;
  const title = properties['Name'].title;
  const time = properties['Published Date'].date.start;

  return (
    <div>
      <div className={css['time']}>{time}</div>
      <div className={css['title']}>
        <MultipleRichText blocks={title} />
      </div>
    </div>
  );
};
