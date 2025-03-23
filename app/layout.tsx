import clsx from 'clsx';
import { Roboto, Roboto_Mono } from 'next/font/google';

import './global.scss';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});
const mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={clsx(roboto.variable, mono.variable)}>
      <body>{children}</body>
    </html>
  );
}
