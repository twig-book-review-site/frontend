import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <div className='border-solid border-2 border-sky-500 h-screen w-72'>
      <div>
        <Link className='text-lg font-bold ' href='/'>
          Twig
        </Link>
        <nav>
          <ul>
            <li>
              <Link href='/bookshelf'>책장</Link>
            </li>
            <li>
              <Link href='/profile'>프로필</Link>
            </li>
            <li>
              <Link href='/bookmark'>북마크</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* </PaddingConatiner> */}
    </div>
  );
};

export default Navigation;
