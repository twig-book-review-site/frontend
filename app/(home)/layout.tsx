import Navigation from '@/app/components/navigation/navigation';
import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <Navigation />
      <div className='bg-slate-100 w-full'>{children}</div>
    </div>
  );
};

export default HomeLayout;
