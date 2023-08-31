import BookshelfNavigation from '@/app/components/navigation/bookshelf-navigation';
import React from 'react';

const BookshelfLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <BookshelfNavigation />
      {children}
    </div>
  );
};

export default BookshelfLayout;
