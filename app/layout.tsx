import { Roboto } from 'next/font/google';

import './global.scss';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}
