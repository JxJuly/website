import { MyAvatar, WebsiteLayout, Paragraph, BulletedListItem, Heading2 } from '../_components';

import './page.css';

const Page = () => {
  return (
    <WebsiteLayout>
      <div className="abort-welcome">
        <MyAvatar width={80} type="circle" />
        <div>
          <Paragraph>
            👋 嗨！欢迎来到我的个人网站~
            <br />
            我是 <strong>July</strong>，一个兴趣使然的互联网卖艺人。
          </Paragraph>
        </div>
      </div>

      <Heading2># 关于网站</Heading2>
      <Paragraph>在这里你能看到：</Paragraph>
      <BulletedListItem>
        <Paragraph.Text bold>一些我在互联网技术领域的笔记与分享（瞎捣鼓）；</Paragraph.Text>
      </BulletedListItem>
      <BulletedListItem>
        <Paragraph.Text bold>一些我的人生经历与思考；</Paragraph.Text>
      </BulletedListItem>
      <BulletedListItem>
        <Paragraph.Text bold>一些不成体系的杂文、观后感等。</Paragraph.Text>
      </BulletedListItem>
      <Paragraph>
        网站更新的频率并不稳定，大约是工作中有新的发现、生活中有新的体验加之有空余的时间，“因缘际会”之下才会有一篇新的文章。
      </Paragraph>
      <Heading2># 关于我</Heading2>
      <Paragraph>
        我是一名 95 后的技术宅男，最大的爱好就是把编程应用于我感兴趣的地方（爱折腾）。比如：
      </Paragraph>
      <BulletedListItem>
        <Paragraph.Text bold>我热爱玩主机游戏和主流的竞技游戏</Paragraph.Text>
        <Paragraph>
          👉 <Paragraph.Link href="/game">这里是我的游戏档案</Paragraph.Link>，欢迎来找我玩~
        </Paragraph>
        <Paragraph>
          <Paragraph.Text italic>
            我还开发了御三家 Web API 的 RSC 组件{' '}
            <Paragraph.Text code>@july_cm/react-game-profile</Paragraph.Text>，你可以在
            <Paragraph.Link href="https://github.com/JxJuly/react-game-profile">我的 Github</Paragraph.Link>
            上找到它~
          </Paragraph.Text>
        </Paragraph>
      </BulletedListItem>
      <BulletedListItem>
        <Paragraph>
          <Paragraph.Text bold>我爱折腾电子产品</Paragraph.Text>
        </Paragraph>
        <Paragraph>
          你同样可以在我的 Github 主页找到我专为{' '}
          <Paragraph.Link href="https://github.com/JxJuly/media-scraper">
            NAS + Emby 开发的媒体刮削器
          </Paragraph.Link>
          。
        </Paragraph>
      </BulletedListItem>
      <Heading2># 联系方式</Heading2>
      <Paragraph>E-mail: MyCrown1234@hotmail.com</Paragraph>
      <Paragraph>
        Github: <Paragraph.Link href="https://github.com/JxJuly">https://github.com/JxJuly</Paragraph.Link>
      </Paragraph>
    </WebsiteLayout>
  );
};

export default Page;
