import { Fragment } from 'react';

import cls from 'clsx';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { jsx, jsxs } from 'react/jsx-runtime';
import { codeToHast } from 'shiki';

import type { ICodeBlock } from '@july_cm/react-notion';

import './code.css';

const SUPPORT_LANGUAGES = ['javascript', 'typescript', 'json', 'bash'];

const Code: ICodeBlock = async ({ block }) => {
  const { code } = block;
  const {
    language,
    rich_text: [text],
  } = code;
  const { plain_text: content } = text;

  if (!SUPPORT_LANGUAGES.includes(language)) {
    return (
      <pre className={cls('notion-code', `language-${language}`)}>
        <code className={`language-${language}`}>{content}</code>
      </pre>
    );
  }

  const html = await codeToHast(content, { lang: language, theme: 'dark-plus' });

  return toJsxRuntime(html, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({ className, ...props }) => <pre className={cls('notion-code', className)} {...props} />,
    },
  });
};

export { Code };
