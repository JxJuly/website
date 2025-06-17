import Link from 'next/link';

import { MyAvatar } from '../avatar';
import css from './home-cover.module.scss';

export const HomeCover = () => {
  return (
    <div className={css['home-cover']}>
      <MyAvatar width={48} height={48} type="circle" />
      <div className={css['my-name']}>July</div>
      <div className={css['divider']} />
      <ul className={css['menus']}>
        <li>
          <Link href="/archives">Archives</Link>
        </li>
        <li>
          <Link href="/abort">Abort</Link>
        </li>
      </ul>
    </div>
  );
};
