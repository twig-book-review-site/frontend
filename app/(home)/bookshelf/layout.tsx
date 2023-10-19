import BookshelfNavigation from '@/app/components/navigation/bookshelf-navigation';
import React from 'react';

const BookshelfLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='md:w-[240px]'>
        <BookshelfNavigation />
      </div>
      <div className='md:w-[528px] lg:w-[1062px] grow'>{children}</div>
    </div>
  );
};

export default BookshelfLayout;
