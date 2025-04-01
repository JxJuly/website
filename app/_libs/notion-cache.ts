import fs from 'fs';
import path from 'path';

const CACHE_PATH = path.resolve(process.cwd(), '.notion');

interface NotionCacheOptions {
  key: string;
  cache?: boolean;
}

export const cache = <T extends any[], Y>(fn: (...args: T) => Promise<Y>, options: NotionCacheOptions) => {
  const enabled = options.cache && process.env.NODE_ENV !== 'production';

  const file = path.resolve(CACHE_PATH, `${options.key}.json`);

  const apply = async (...args: T) => {
    if (enabled && fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf-8');
      return JSON.parse(data) as Y;
    }

    const data: Y = await fn.apply(fn, args);
    if (enabled) {
      fs.mkdirSync(CACHE_PATH, { recursive: true });
      fs.writeFileSync(file, JSON.stringify(data));
    }

    return data;
  };

  return apply;
};
