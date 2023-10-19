import Link from 'next/link';
import React from 'react';
import NavigationItem from './navigation-item';
import Display from '../typography/display';

const Navigation = () => {
  return (
    <div className='bg-tertiary-300 border-r border-gray-300 h-screen lg:w-40 md:w-16 w-12'>
      {/* <div className='border-r border-gray-300 h-screen lg:bg-blue-300 md:bg-yellow-400 bg-red-400 w-13'> */}
      <div>
        <Link href='/'>
          <Display>Twig</Display>
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
