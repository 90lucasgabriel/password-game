import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTransition } from 'react-spring';

import './style.css';
import Answer from '../Answer';

const AnswerList = () => {
  const divRef = useRef(null);
  const answers = useSelector((state) => state.answer.list);
  const answersWithTransitions = useTransition(
    answers,
    (answer) => answer.value,
    {
      from: {
        // transform: 'translate3d(0,-85px,0)',
        opacity: 1,
        height: 0,
      },
      enter: { transform: 'translate3d(0,0,0)', height: 85, opacity: 1 },
      leave: { transform: 'translate3d(0, -85px, 0)', height: 0, opacity: 0 },

    }
  );

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [answers]);

  return (
    <div className='answerListWrapper'>
      <div ref={divRef} />
      {answersWithTransitions.map(({ key, item, props }, index) => {
        return (
          <Answer
            {...item}
            key={key}
            style={props}
            index={answers.length - index}
          />
        );
      })}
    </div>
  );
};

export default AnswerList;
