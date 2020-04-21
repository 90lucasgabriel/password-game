import React from 'react';
import { div } from '@material-ui/core';

import './style.css';

function Answer({ value, right, wrongPosition, wrong }) {
  const rightSentence = () => {
    return right > 1
      ? `${right} números certos nos lugares certos.`
      : `${right} número certo no lugar certo.`;
  };

  const wrongPositionSentence = () => {
    return wrongPosition > 1
      ? `${wrongPosition} números certos em lugares errados.`
      : `${wrongPosition} número certo em lugar errado.`;
  };

  const wrongSentence = () => {
    return wrong > 1 ? `${wrong} números errados.` : `${wrong} número errado.`;
  };

  return (
    <div className='result'>
      <div className='value' color='secondary'>
        {value}
      </div>
      <div className='hint'>
        <ul>
          <li>
            {rightSentence()}
          </li>
          <li>
            {wrongPositionSentence()}
          </li>
          <li>
            {wrongSentence()}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Answer;
