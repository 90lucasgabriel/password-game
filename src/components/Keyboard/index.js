import React from 'react';
import { Button } from '@material-ui/core';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addValueAction, resetValueAction, addAnswerAction } from '../../redux/actions/AnswerAction';

function Keyboard() {
  const values = ['1', '2', '3', '4', '5', '<', '6', '7', '8', '9', '0', 'ok'];
  const { list: answers, value: currentValue } = useSelector((state) => state.answer);
  const dispatch = useDispatch();


  let right = 0;
  let wrongPosition = 0;
  let wrong = 0;

  const addValue = (value) => {
    if(value === '<') {
      return dispatch(resetValueAction());  
    }

    if(value === 'ok') {
      if(currentValue.length === 3){
        return dispatch(addAnswerAction({ value: currentValue, right: 2, wrongPosition: 1, wrong: 0 }));

        // return dispatch(addAnswerAction(currentValue))
      }
    }
    return dispatch(addValueAction(value));
  }

  // const checkPasswords = (p) => {
  //   checkHints(p);
  //   if (password === p) {
  //     alert(`Parabéns!! Você acertou em ${answers.length} tentativas.`);
  //     document.getElementById('passwordInput').disabled = true;
  //     return;
  //   }
  // };

  // const checkHints = (p) => {
  //   const userPasswordArray = p.split('');

  //   userPasswordArray.map((character, index) => {
  //     if (password.includes(character)) {
  //       if (password.indexOf(character) === index) {
  //         return right++;
  //       }
  //       return wrongPosition++;
  //     }
  //     return wrong++;
  //   });
  // };

  return (
    <div className='keyboardWrapper'>
      {values.map((value) => (
        <Button
          className='keyboardNumber'
          color='secondary'
          variant='contained'
          size='large'
          key={value}
          onClick={(e) => addValue(value)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
}

export default Keyboard;
