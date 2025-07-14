'use client';

import { useEffect, useRef } from 'react';

import cls from 'clsx';
import { highlightElement } from 'prismjs';

import type { ICodeBlock } from '@july_cm/react-notion';

import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';

import './code.css';

const Code: ICodeBlock = ({ block }) => {
  const { code } = block;
  const {
    language,
    rich_text: [text],
  } = code;
  const { plain_text: content } = text;

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      highlightElement(ref.current);
    }
  }, [ref]);

  return (
    <pre className={cls('notion-code', `language-${language}`)}>
      <code className={`language-${language}`} ref={ref}>
        {content}
      </code>
    </pre>
  );
};

export { Code };
