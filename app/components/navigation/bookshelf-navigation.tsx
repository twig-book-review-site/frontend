import React from 'react';
import Link from 'next/link';
import { DUMMY_BOOKS } from '@/DUMMY_DATA';
import BookCard from '../bookshelf/book-card';
import Display from '../typography/display';

const BookshelfNavigation = () => {
  return (
    <div className='h-screen border-r border-gray-300 bg-tertiary-200'>
      <h1 className='px-2 py-3 hidden 2xl:block'>
        <Display size='small'>나의 책장</Display>
      </h1>
      <div className='flex justify-between px-2 py-3'>
        <span className='text-gray-600 hidden 2xl:inline'>전체{DUMMY_BOOKS.length}권</span>
        <span>책 추가</span> {/* 책 추가 버튼 */}
      </div>
      <nav>
        <ul>
          {DUMMY_BOOKS.map((book) => (
            <li key={book.title}>
              <Link href={`/bookshelf/${book.id}`}>
                <BookCard id={book.id} title={book.title} author={book.author} sentences={book.sentences} ideas={book.ideas} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BookshelfNavigation;
