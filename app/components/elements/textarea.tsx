'use client';

import React, { useState } from 'react';
import Button from './button';

const Textarea = () => {
  const [value, setValue] = useState('');
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <textarea value={value} onChange={handleTextareaChange} />
      <Button intent='primary' size='medium'>
        입력
      </Button>
    </div>
  );
};

export default Textarea;
