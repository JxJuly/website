import fs from 'fs';
import path from 'path';

const CACHE_PATH = path.resolve(process.cwd(), '.api-cache');

interface CacheOptions {
  key: string;
  disabled?: boolean;
}

export const cache = async <T>(fn: () => Promise<T>, options: CacheOptions): Promise<T> => {
  /** 仅在开发模式可用 */
  const enabled = !options.disabled && process.env.NODE_ENV === 'development';

  const file = path.resolve(CACHE_PATH, `${options.key}.json`);

  if (enabled && fs.existsSync(file)) {
    const data = fs.readFileSync(file, 'utf-8');
    return JSON.parse(data) as T;
  }
  const data = await fn();
  if (enabled) {
    fs.mkdirSync(CACHE_PATH, { recursive: true });
    fs.writeFileSync(file, JSON.stringify(data, undefined, 2));
  }
  return data;
};
