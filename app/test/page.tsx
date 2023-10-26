import React from 'react';
import Image from 'next/image';
import { BookmarkIcon, DownRightArrowIcon, MoreIcon } from '@/assets/icons';
import Button from '@/app/components/elements/button';

const TestPage = () => {
  return (
    <div>
      <h2>Bookmark</h2>
      <Image src={BookmarkIcon} alt='bookmark-icon' width={30} />
      <Image src={BookmarkIcon} alt='bookmark-icon' width={50} />
      <Button intent='primary' size='medium'>
        primary
      </Button>
      <Button intent='secondary' size='medium'>
        secondary
      </Button>
      <br />
      <Button intent='secondary' size='small'>
        small
      </Button>
      <br />
      <Button size='medium' disabled>
        disabled
      </Button>
      <br />
    </div>
  );
};

export default TestPage;
