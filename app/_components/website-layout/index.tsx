import Link from 'next/link';

import { MyAvatar } from '../my-avatar';

import './website-layout.scss';

export const WebsiteLayout = ({ children }) => {
  return (
    <div className="website-layout">
      <header>
        <div className="header-container common-container">
          <div className="left-part">
            <MyAvatar width={32} height={32} type="circle" />
            <nav>
              <Link href="/">home</Link>
              <Link href="/archives">archives</Link>
              <Link href="/abort">abort</Link>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div className="common-container">{children}</div>
      </main>
      <footer>
        <div className="footer-container common-container">
          Copyright 2025 July · Built with NextJS · Deployed on Vercel
        </div>
      </footer>
    </div>
  );
};
