import React from 'react';
import { Button } from '@material-ui/core';

import './style.css';

function Keyboard() {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className='keyboardWrapper'>
      {values.map((value) => (
        <Button
          className='keyboardNumber'
          color='primary'
          variant='contained'
          size='large'
          key={value}
        >
          {value}
        </Button>
      ))}
    </div>
  );
}

export default Keyboard;
