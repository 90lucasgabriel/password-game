import React from 'react';
import { useSelector } from 'react-redux';

import './style.css';
import Answer from '../Answer';
import { Badge } from '@material-ui/core';

function AnswerList() {
  const answers = useSelector((state) => state.answer.list);

  console.log('state', answers);
  return (
    <>
      {answers.map((answer, index) => (
        <div className="answerWrapper">
        <Badge className="badge" badgeContent={answers.length - index} color="primary" />
        <Answer key={answer} {...answer} />
        </div>
      ))}
    </>
  );
}

export default AnswerList;
