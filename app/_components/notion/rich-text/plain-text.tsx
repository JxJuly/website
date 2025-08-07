import { AnnotationSpan } from './annotation-span';

import type { TextRichTextItemResponse } from '@july_cm/react-notion';

import './plain-text.css';

type PlainTextProps = {
  block: TextRichTextItemResponse;
} & React.HTMLAttributes<HTMLSpanElement>;

export const PlainText: React.FC<PlainTextProps> = ({ block, ...props }) => {
  const { plain_text: text, annotations, href } = block;
  const isLink = !!href;
  const isCode = !!annotations.code;

  if (isLink) {
    return (
      <a href={href} target="_blank" className="plain-text-a" {...props}>
        <AnnotationSpan annotations={annotations}>{text}</AnnotationSpan>
      </a>
    );
  }
  if (isCode) {
    return (
      <code className="plain-text-code" {...props}>
        <AnnotationSpan annotations={annotations}>{text}</AnnotationSpan>
      </code>
    );
  }

  return (
    <AnnotationSpan annotations={annotations} {...props}>
      {text}
    </AnnotationSpan>
  );
};
