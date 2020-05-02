import React from 'react';

import './style.css';
import { Container } from './styles';
import { Badge } from '@material-ui/core';

const Answer = ({ value, right, wrongPosition, wrong, style, index }) => {
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
    <Container style={style}>
      <div className='badge' color='secondary' >{index}</div>
      <div className='value' color='secondary'>
        {value}
      </div>
      <div className='hint'>
        <ul>
          <li>{rightSentence()}</li>
          <li>{wrongPositionSentence()}</li>
          <li>{wrongSentence()}</li>
        </ul>
      </div>
    </Container>
  );
};

export default Answer;
