import { NotionRenderer } from '@july_cm/react-notion';

import { WebsiteLayout } from '../_components';
import { components } from '../_components/notion';

import type { Metadata } from 'next';

const Page = () => {
  return (
    <WebsiteLayout>
      <NotionRenderer
        auth={process.env.NOTION_TOKEN}
        blockId={process.env.NOTION_ABORT_ME_PAGE_ID}
        components={components}
      />
    </WebsiteLayout>
  );
};

export const metadata: Metadata = {
  title: 'Abort',
};

export default Page;
