import Link from 'next/link';

import { MultipleRichText } from '../../../_components/notion';

import type { PageObjectResponse } from '@july_cm/react-notion';
import './article-item.css';

export const ArticleItem: React.FC<{ article: PageObjectResponse }> = ({ article }) => {
  const { properties } = article;
  const time =
    properties['Published Date'].type === 'date' ? properties['Published Date'].date?.start : '- -';
  const title = properties['Name'].type === 'title' ? properties['Name'].title : '- -';
  const description =
    properties['Description'].type === 'rich_text' ? properties['Description'].rich_text : '- -';
  return (
    <div className="article-item">
      {/* time */}
      <div className="time">{time}</div>
      {/* title */}
      <div className="title">
        <Link href={`/article/${article.id}`}>
          {Array.isArray(title) ? <MultipleRichText blocks={title} /> : title}
        </Link>
      </div>
      {/* description */}
      <div className="description">
        {Array.isArray(description) ? <MultipleRichText blocks={description} /> : description}
      </div>
    </div>
  );
};
