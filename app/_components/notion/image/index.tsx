'use client';

import type { ImageBlockObjectResponse } from '@july_cm/react-notion';

import './image.scss';

interface ImageProps {
  block: ImageBlockObjectResponse;
}

const Image: React.FC<ImageProps> = ({ block }) => {
  const { image } = block;
  const { type } = image;
  if (type === 'external') {
    return null;
  }

  return (
    <div className="notion-image">
      <img src={image.file.url} loading="lazy" />
    </div>
  );
};

export { Image };
