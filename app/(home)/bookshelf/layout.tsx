import BookshelfNavigation from '@/app/components/navigation/bookshelf-navigation';
import React from 'react';

const BookshelfLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <BookshelfNavigation />

      <div className='w-[1000px]'>{children}</div>
    </div>
  );
};

export default BookshelfLayout;
