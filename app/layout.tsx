import clsx from 'clsx';
import { Roboto, Roboto_Mono } from 'next/font/google';

import type { Metadata } from 'next';
import './global.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});
const mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    template: "%s | July's webiste",
    default: 'July',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "July's webiste",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={clsx(roboto.variable, mono.variable)}>
      <body>{children}</body>
    </html>
  );
}
