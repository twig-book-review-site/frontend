import React from 'react';
import Image from 'next/image';
import { BookmarkIcon, UserIcon, BookshelfIcon } from '@/assets/icons';

interface NavigationItemProps {
  name: '책장' | '북마크' | '프로필';
}

const navigationIcons = {
  책장: 'bookshelf',
  북마크: 'bookmark-simple',
  프로필: 'user',
};

const NavigationItem = ({ name }: NavigationItemProps) => {
  console.log(name);

  return (
    <li className='p-3 hover:bg-tertiary-400 font-gothic text-base flex'>
      <span>
        {/* navigationIcons[name] */}
        <Image src={`/${navigationIcons[name]}.svg`} alt='bookshelf' width={30} height={40} />
      </span>
      <span className='xl:inline hidden ml-1 font-batang'>{name}</span>
    </li>
  );
};

export default NavigationItem;
