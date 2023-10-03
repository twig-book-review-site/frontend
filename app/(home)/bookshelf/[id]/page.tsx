import React from 'react';
import { DUMMY_MY_BOOKS } from '@/DUMMY_DATA';
import { notFound } from 'next/navigation';

interface SentenceCard {
  id: number;
  page: number;
  created: string;
  sentence: string;
  ideas: string[];
  bookmarked: boolean;
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
    <div>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>
        {book?.sentence_cards.map((card: SentenceCard) => (
          <div key={card.created}>
            <div>{card.created}</div>
            <div>{card.bookmarked}</div>
            <div>{card.page}</div>
            <div>{card.sentence}</div>
            <div>(ideas: {card.ideas})</div>
            <div>----------------------------------------------</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
