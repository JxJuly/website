import type { PropsWithChildren } from 'react';

import { clsx } from 'clsx';

import type { RichTextItemResponse } from '@july_cm/react-notion';
import './annotation-span.css';

type AnnotationSpanProps = {
  annotations: RichTextItemResponse['annotations'];
} & React.HTMLAttributes<HTMLSpanElement>;

export const AnnotationSpan: React.FC<PropsWithChildren<AnnotationSpanProps>> = ({
  annotations,
  className,
  ...props
}) => {
  const { color, ...restAnnotations } = annotations;
  return <span className={clsx('annotation-span', className, restAnnotations, color)} {...props} />;
};
