import React from 'react';
import Button from '@/app/components/elements/button';
import Subheader from '@/app/components/elements/subheader';

const Bookmark = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-end px-4 z-10 h-12'>
        <h1 className='font-batang text-xl'>북마크</h1>
      </div>
      <Subheader />
    </div>
  );
};

export default Bookmark;
