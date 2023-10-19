'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export interface BookCardProps {
  image?: string;
  title: string;
  author: string;
  sentences: number;
  ideas: number;
  id: string;
}

const BookCard = ({ title, author, sentences, ideas, id }: BookCardProps) => {
  const pathname = usePathname();
  const page = pathname.split('/')[2];

  return (
    <div
      className={`flex font-gothic px-2 py-3 hover:bg-tertiary-300 
      ${page === id ? 'bg-tertiary-300 border-r-2 border-black' : ''}
      `}
    >
      <div className='w-[51px] drop-shadow-md'>
        <Image src='https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791157326044.jpg' alt={title} width={50} height={50} />
      </div>
      <div className='hidden md:block'>
        <div>{title}</div>
        <div className='text-xs text-gray-500 pt-1'>{author}</div>
        <div className='text-xs text-gray-650 pt-2'>
          <span>문장{sentences} ・</span> <span>아이디어{ideas}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
