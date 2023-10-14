import React from 'react';
import Button from '@/app/components/elements/button';
import Textarea from '../../components/elements/textarea';

const Bookmark = () => {
  return (
    <div>
      <h2>Bookmark</h2>
      <Button intent='primary' size='medium'>
        primary
      </Button>
      <Button intent='secondary' size='medium'>
        secondary
      </Button>
      <Button size='medium' disabled>
        disabled
      </Button>
      <br />
      <Textarea />
    </div>
  );
};

export default Bookmark;
