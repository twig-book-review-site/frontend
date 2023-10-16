import React from 'react';
import Image from 'next/image';
import { BookmarkIcon, UserIcon, BookshelfIcon } from '@/assets/icons';

interface NavigationItemProps {
  name: string;
}

const NavigationItem = ({ name }: NavigationItemProps) => {
  return (
    <li className='p-3 hover:bg-tertiary-400 font-gothic text-base flex'>
      <span className='mr-1'>
        <Image src={BookshelfIcon} alt='bookshelf' />
      </span>
      <span className='lg:inline hidden'>{name}</span>
    </li>
  );
};

export default NavigationItem;
