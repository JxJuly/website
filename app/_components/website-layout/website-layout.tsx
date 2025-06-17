import Link from 'next/link';

import { MyAvatar } from '../avatar';
import { ThemeButton } from './theme-button';
import { ROUTES } from '../../_constants';

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
              {ROUTES.map((route) => (
                <Link key={route.link} href={route.link}>
                  {route.text}
                </Link>
              ))}
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
