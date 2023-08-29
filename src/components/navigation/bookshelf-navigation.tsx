import Link from 'next/link';
import React from 'react';

const BookshelfNavigation = () => {
  return (
    <div className='border-solid border-2 border-sky-500 h-screen w-72'>
      <nav>
        <ul>
          <li>
            <Link href='/bookshelf'>책</Link>
          </li>
          <li>
            <Link href='/bookshelf'>책</Link>
          </li>
          <li>
            <Link href='/bookshelf'>책</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BookshelfNavigation;
