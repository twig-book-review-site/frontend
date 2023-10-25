import React from 'react';
import { notFound } from 'next/navigation';
import SentenceCard from '@/app/components/bookshelf/sentence-card';
import Input from '@/app/components/bookshelf/input';
import { DUMMY_MY_BOOKS } from '@/mockup/DUMMY_DATA';
interface SentenceCard {
  id: number;
  page: number;
  created: string;
  sentence: string;
  ideas: string[];
  isBookmarked: boolean;
}

export const generateStaticParams = async () => {
  return DUMMY_MY_BOOKS.map((book) => {
    return book.id;
  });
};

const Page = ({ params }: { params: { id: string } }) => {
  const book = DUMMY_MY_BOOKS.find((book) => book.id === params.id);

  if (!book) return notFound();
  return (
    <div className='flex flex-col h-full'>
      {/* Header */}
      <div>
        <div className='flex items-end px-4 z-10 h-12'>
          <h1 className='font-batang text-xl'>{book.title}</h1>
          <h2 className='font-batang pl-3'>{book.author}</h2>
        </div>
        <div className='flex justify-between px-4 py-2'>
          <span className='font-gothic text-gray-400 text-xs'>총 NN개</span>
          <div className='font-gothic text-gray-400 text-xs'>
            <span className='pr-2'>
              <input type='checkbox' className='mr-2' />
              북마크만 보기
            </span>
            <span className='pr-2'>최신순</span>
          </div>
        </div>
      </div>
      {/* Sentences */}
      <div className='h-full flex flex-col justify-end'>
        {book?.sentence_cards.map((card: SentenceCard) => (
          <SentenceCard
            key={card.created}
            id={card.id}
            page={card.page}
            created={card.created}
            sentence={card.sentence}
            ideas={card.ideas}
            isBookmarked={card.isBookmarked}
          />
        ))}
      </div>

      {/* input */}
      <Input />
    </div>
  );
};

export default Page;
