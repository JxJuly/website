import Link from 'next/link';

import { MyAvatar } from '../avatar';
import { ThemeButton } from './theme-button';

import './website-layout.css';

export const WebsiteLayout = ({ children }) => {
  return (
    <div className="website-layout">
      <header>
        <div className="header-container common-container">
          <div className="left-part">
            <Link className="logo" href="/">
              <MyAvatar width={32} height={32} type="circle" />
              <div className="my-name">July</div>
            </Link>
            <nav>
              <Link href="/archives">Archives</Link>
              <Link href="/game">Game</Link>
              <Link href="/abort">Abort</Link>
            </nav>
          </div>
          <ThemeButton />
        </div>
      </header>
      <main>
        <div className="main-container">{children}</div>
      </main>
      <footer>
        <div className="footer-container common-container">
          Copyright 2025 July · Built with NextJS · Deployed on Vercel
        </div>
      </footer>
    </div>
  );
};
