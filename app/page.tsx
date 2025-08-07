import Link from 'next/link';

import { MyAvatar } from './_components';
import { ROUTES } from './_constants';

import type { Metadata } from 'next';
import './page.css';

export const metadata: Metadata = {
  title: {
    absolute: "July's webiste",
  },
  description: "Welcome to July's webiste!",
};

export default function Page() {
  return (
    <div className="home-container">
      <MyAvatar width={48} height={48} type="circle" priority />
      <div className="my-name">July</div>
      <div className="divider" />
      <ul className="menus">
        {ROUTES.map((route) => (
          <li key={route.link}>
            <Link href={route.link}>{route.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
