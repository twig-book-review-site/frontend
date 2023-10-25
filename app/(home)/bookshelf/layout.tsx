import BookshelfNavigation from '@/app/components/navigation/bookshelf-navigation';
import React from 'react';

const BookshelfLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex w-full'>
      <div className='xl:w-1/4 grow-0'>
        <BookshelfNavigation />
      </div>
      <div className='md:w-[528px] grow 2xl:w-[1062px] h-screen'>{children}</div>
    </div>
  );
};

export default BookshelfLayout;
