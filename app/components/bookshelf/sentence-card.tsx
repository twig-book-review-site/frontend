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
      className='flex my-4 w-full'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className='text-primary-600 w-12 py-2 text-base'>p. {page}</div>

      {/* Sentence box */}
      <div className='border border-gray-200 w-[780px] flex flex-col p-2'>
        {/* <div>{isBookmarked}</div> */}
        <p className='p-2 font-gothic text-sm '> {sentence}</p>
        <div className='text-gray-500 self-end text-sm'>{created}</div>
        {/* <div>(ideas: {ideas})</div> */}
      </div>
      {/* Buttons */}
      {isVisible && (
        <div className='bg-tertiary-300 mx-2 self-end rounded-md flex justify-between p-1 w-[90px]'>
          <button className='flex justify-center w-[30px] hover:bg-tertiary-400 rounded-md'>
            <Image src={BookmarkIcon} alt='bookmark' width={22} />
          </button>
          <button className='flex justify-center  w-[30px] pt-1 hover:bg-tertiary-400 rounded-md'>
            <Image src={DownRightArrowIcon} alt='write-idea' />
          </button>
          <button className='flex justify-center w-[30px] pt-1 hover:bg-tertiary-400 rounded-md'>
            <Image src={MoreIcon} alt='more' />
          </button>
        </div>
      )}
    </div>
  );
};

export default SentenceCard;
