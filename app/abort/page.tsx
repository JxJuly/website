import { MyAvatar, WebsiteLayout } from '../_components';
import { PsnInfoCard } from './_components/psn-info-card';

import './page.scss';

const Page = () => {
  return (
    <WebsiteLayout>
      <div className="page-abort">
        <div className="abort-welcome">
          <MyAvatar width={80} type="circle" />
          <div>
            <p>
              👋 嗨！欢迎来到我的个人网站~
              <br />
              我是 <strong>July</strong>，一个兴趣使然的互联网卖艺人。
            </p>
          </div>
        </div>

        <h2>我是谁</h2>
        <PsnInfoCard />
        <h2>这是哪里</h2>
        <h2>联系我</h2>
      </div>
    </WebsiteLayout>
  );
};

export default Page;
