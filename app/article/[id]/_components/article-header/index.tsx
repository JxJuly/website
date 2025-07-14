import { isFullPage } from '@july_cm/react-notion';

import { MultipleRichText } from '../../../../_components/notion';
import { client } from '../../../../_libs/notion-client';

import './article-header.css';

interface ArticleHeaderProps {
  id: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = async ({ id }) => {
  const page = await client.pages.retrieve({ page_id: id });

  if (!isFullPage(page)) {
    return null;
  }

  const { properties } = page;
  const time = properties['Published Date'].type === 'date' ? properties['Published Date'].date.start : '- -';
  const title = properties['Name'].type === 'title' ? properties['Name'].title : '- -';

  return (
    <div className="article-header">
      <div className="article-time">{time}</div>
      <div className="article-title">
        {Array.isArray(title) ? <MultipleRichText blocks={title} /> : title}
      </div>
    </div>
  );
};
