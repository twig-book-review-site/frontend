import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex'>{children}</div>;
};

export default AuthLayout;
