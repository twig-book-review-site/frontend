'use client';
import React, { useEffect, useState } from 'react';

type InputForm = {
  page: string | number;
  text: string;
};

const Input = () => {
  const [formData, setFormData] = useState<InputForm>({
    page: '',
    text: '',
  });
  const [textLength, setTextLength] = useState(formData.text.length);
  const [textareaHeight, setTextareaHeight] = useState(32); // 초기 높이

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    event.preventDefault(); // prevent page refresh
    // console.log('event: ', event.currentTarget.elements);
    console.log(formData);
  };

  useEffect(() => {
    // 컴포넌트가 마운트되거나 텍스트가 업데이트될 때 호출됩니다.
    const textarea = document.getElementById('auto-resizing-textarea') as HTMLTextAreaElement;
    if (textarea) {
      setTextareaHeight(textarea.scrollHeight); // 스크롤 높이로 설정
    }
  }, [formData.text]);

  return (
    <form className='h-[200px] border-2 border-gray-400' onSubmit={handleSubmit}>
      <div className='flex'>
        <span>P.</span>
        <input
          className='w-[60px] h-[20px]'
          name='page'
          value={formData.page}
          onChange={handleChangeForm}
          placeholder='쪽수 (선택)'
        />
      </div>
      <div className='flex'>
        <textarea
          id='auto-resizing-textarea'
          className='w-full min-h-[100px]'
          name='text'
          value={formData.text}
          onChange={handleChangeForm}
          placeholder='문장을 입력해보세요.'
          style={{ height: textareaHeight + 'px' }}
        />
        <button type='submit'>문장 쓰기</button>
      </div>
    </form>
  );
};

export default Input;
