import type { IImageBlock } from '@july_cm/react-notion';

import './image.css';

const Image: IImageBlock = ({ block }) => {
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
