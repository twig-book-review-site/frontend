import Image from 'next/image';
import React from 'react';

interface BookCardProps {
  image?: string;
  title: string;
  author: string;
  sentences: number;
  ideas: number;
}

const BookCard = ({ title, author, sentences, ideas }: BookCardProps) => {
  return (
    <div className='border-s-violet-100 flex'>
      <Image src='https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791157326044.jpg' alt={title} width={50} height={50} />
      <div>
        <div>{title}</div>
        <div>{author}</div>
        <div>
          <span>문장{sentences} </span> <span>아이디어{ideas}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
