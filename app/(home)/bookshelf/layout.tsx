import BookshelfNavigation from '@/app/components/navigation/bookshelf-navigation';
import React from 'react';

const BookshelfLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <BookshelfNavigation />

      <div className='bg-yellow-100 w-full'>{children}</div>
    </div>
  );
};

export default BookshelfLayout;