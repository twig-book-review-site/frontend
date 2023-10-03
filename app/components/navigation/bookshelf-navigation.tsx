import Link from 'next/link';
import React from 'react';
import BookCard from '../bookshelf/book-card';
import { DUMMY_BOOKS } from '@/DUMMY_DATA';

const BookshelfNavigation = () => {
  return (
    <div className='border-solid border-2 border-sky-500 h-screen w-72'>
      <h1>나의 책장</h1>
      <div className='flex justify-between'>
        <span>전체{DUMMY_BOOKS.length}권</span>
        <span>책 추가</span> {/* 책 추가 버튼 */}
      </div>
      <nav>
        <ul>
          {DUMMY_BOOKS.map((book) => (
            <li key={book.title}>
              <Link href={`/bookshelf/${book.id}`}>
                <BookCard title={book.title} author={book.author} sentences={book.sentences} ideas={book.ideas} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BookshelfNavigation;
