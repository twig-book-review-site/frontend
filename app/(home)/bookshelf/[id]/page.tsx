import React from 'react';
import { DUMMY_MY_BOOKS } from '@/DUMMY_DATA';
import { notFound } from 'next/navigation';
import Display from '@/app/components/typography/display';
import SentenceCard from '@/app/components/bookshelf/sentence-card';

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
    <div className='w-full'>
      {/* Header */}
      <div className='h-20'>
        <div className='w-full h-20 absolute bg-white opacity-50' />
        <div className='w-full h-20 flex items-center px-3 absolute'>
          <h1 className='font-batang text-3xl'>
            {/* <Display size='large'>{book.title}</Display> */}
            {book.title}
          </h1>
          <h2 className='font-batang text-xl pl-3'>
            {/* <Display size='small'> {book.author}</Display> */}
            {book.author}
          </h2>
        </div>
      </div>
      {/* Sentences */}
      <div className='p-3'>
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
    </div>
  );
};

export default Page;
