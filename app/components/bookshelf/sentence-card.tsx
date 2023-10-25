'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BookmarkIcon, DownRightArrowIcon, MoreIcon } from '@/assets/icons';

interface SentenceCardProps {
  id: number | string;
  page: number;
  created: string;
  sentence: string;
  ideas: string[];
  isBookmarked: boolean;
}

const SentenceCard = ({ id, page, created, sentence, ideas, isBookmarked }: SentenceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className='flex flex-col p-3 border-gray-200 border-b'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className='flex justify-between mb-3'>
        <div className='text-primary-600 text-base'>p. {page}</div>
        <div className='text-gray-500 text-sm'>{created}</div>
      </div>
      <span className='font-gothic text-sm 2xl:w-[1006px]'>{sentence}</span>

      <div className='h-8 flex justify-end'>
        {isVisible && (
          <div className='flex justify-between w-[80px]'>
            <button className='flex justify-center'>
              <Image src={BookmarkIcon} alt='bookmark' width={22} />
            </button>
            <button className='flex justify-center  pt-1'>
              <Image src={DownRightArrowIcon} alt='write-idea' />
            </button>
            <button className='flex justify-center pt-1'>
              <Image src={MoreIcon} alt='more' />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SentenceCard;
