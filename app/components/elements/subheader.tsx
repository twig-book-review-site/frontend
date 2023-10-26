'use client';
import React, { useState } from 'react';

type SortOption = 'latest' | 'page';

const Subheader = () => {
  const [totalSentenceCount, setTotalSentenceCount] = useState(0);
  const [showingOnlyBookmarked, setShowingOnlyBookmarked] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortOption>('page');

  const handleChangeShowingOnlyBookmarked = () => setShowingOnlyBookmarked(!showingOnlyBookmarked);

  const handleChangeSelectedSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(event.target.value as SortOption);
  };

  return (
    <div className='flex justify-between px-4 py-2'>
      <span className='font-gothic text-gray-400 text-xs'>총 {totalSentenceCount}개</span>
      <div className='font-gothic text-xs'>
        <span className='pr-2'>
          <input
            type='checkbox'
            className='mr-2'
            checked={showingOnlyBookmarked}
            onChange={handleChangeShowingOnlyBookmarked}
          />
          북마크만 보기
        </span>
        <span className='pr-2'>
          <select name='sort' id='sort' value={selectedSort} onChange={handleChangeSelectedSort}>
            <option value='latest'>최신순</option>
            <option value='page'>쪽수순</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Subheader;
