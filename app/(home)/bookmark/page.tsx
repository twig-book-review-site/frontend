import React from 'react';
import Image from 'next/image';
import { BookmarkIcon, DownRightArrowIcon, MoreIcon } from '@/assets/icons';
import Button from '@/app/components/elements/button';
import Textarea from '../../components/elements/textarea';

const Bookmark = () => {
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
      <Button size='medium' disabled>
        disabled
      </Button>
      <br />
      <Textarea />
    </div>
  );
};

export default Bookmark;
