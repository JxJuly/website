import Link from 'next/link';

import { MyAvatar } from '../my-avatar';
import css from './home-cover.module.scss';

export const HomeCover = () => {
  return (
    <div className={css['home-cover']}>
      <MyAvatar width={48} height={48} type="circle" />
      <div className={css['my-name']}>JULY</div>
      <div className={css['divider']} />
      <ul className={css['menus']}>
        <li>
          <Link href="/archives">archives</Link>
        </li>
        <li>
          <Link href="/abort">abort</Link>
        </li>
      </ul>
    </div>
  );
};
