import React from 'react';
import { useSelector } from 'react-redux';

import './style.css';
import Answer from '../Answer';
import { Badge } from '@material-ui/core';

function AnswerList() {
  const answers = useSelector((state) => state.answer.list);

  return (
    <>
      {answers.map((answer, index) => (
        <div key={answer.value} className='answerWrapper'>
          <Badge
            className='badge'
            badgeContent={answers.length - index}
            color='secondary'
          />
          <Answer {...answer} />
        </div>
      ))}
    </>
  );
}

export default AnswerList;
