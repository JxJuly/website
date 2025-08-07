import clsx from 'clsx';
import { Roboto, IBM_Plex_Mono } from 'next/font/google';

import type { Metadata } from 'next';
import './global.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibm-plex-mono',
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
    <html lang="zh" className={clsx(roboto.variable, ibmPlexMono.variable)}>
      <body>{children}</body>
    </html>
  );
}
