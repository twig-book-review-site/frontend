import Link from 'next/link';
import React from 'react';
import NavigationItem from './navigation-item';

const Navigation = () => {
  return (
    <div className='bg-tertiary-300 border-r border-gray-300 h-screen'>
      <div>
        <Link href='/'>
          <div className='font-batang 2xl:text-2xl text-lg p-2'>Twig</div>
        </Link>
        <nav className='mt-3'>
          <ul>
            <Link href='/bookshelf'>
              <NavigationItem name='책장' />
            </Link>
            <Link href='/bookmark'>
              <NavigationItem name='북마크' />
            </Link>
            <Link href='/profile'>
              <NavigationItem name='프로필' />
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
