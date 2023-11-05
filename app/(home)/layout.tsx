import Navigation from '@/app/components/navigation/navigation';
import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='flex w-screen'>
      <div className='xl:w-1/6'>
        <Navigation />
      </div>
      <div className='grow'>{children}</div>
    </div>
  );
};

export default HomeLayout;
