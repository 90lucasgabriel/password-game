import React from 'react';
import { Button } from '@material-ui/core';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addValueAction,
  resetValueAction,
  addAnswerAction,
} from '../../redux/actions/AnswerAction';
import { gameOverAction } from '../../redux/actions/GameAction';

import { PasswordService } from '../../services';

function Keyboard() {
  const values = [
    ['1', '2', '3', '4', '5'],
    ['6', '7', '8', '9', '0'],
  ];

  const dispatch = useDispatch();
  const { list: answers, value: currentValue, password } = useSelector(
    (state) => state.answer
  );
  const { gameOver } = useSelector((state) => state.game);

  const resetValue = () => {
    return dispatch(resetValueAction());
  };

  const addAnswer = () => {
    if (gameOver) {
      return;
    }

    const result = PasswordService.AddAnswer({
      password,
      answers,
      currentValue,
    });

    if (result) {
      if (result.right === 3) {
        alert(`Parabéns!! Você acertou em ${answers.length} tentativas`);
        return dispatch(gameOverAction(true));
      }

      dispatch(addAnswerAction(result));
      dispatch(resetValueAction());
    }
    return;
  };

  const addValue = (value) => {
    if (gameOver) {
      return;
    }

    if (currentValue.includes(value) || currentValue.length === 3) {
      return;
    }

    return dispatch(addValueAction(value));
  };

  return (
    <div className='keyboardWrapper'>
      <div className='keyboardActionWrapper'>
        <Button
          className='keyboardAction'
          color='secondary'
          variant='contained'
          size='large'
          onClick={resetValue}
        >
          <BackspaceOutlinedIcon />
        </Button>
      </div>

      <div className='keyboardNumberWrapper'>
        <div className='keyboardNumberRowWrapper'>
          {values[0].map((value) => {
            return (
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
            );
          })}
        </div>
        <div className='keyboardNumberRowWrapper'>
          {values[1].map((value) => {
            return (
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
            );
          })}
        </div>
      </div>

      <div className='keyboardActionWrapper'>
        <Button
          className='keyboardAction'
          color='secondary'
          variant='contained'
          size='large'
          onClick={addAnswer}
        >
          <CheckCircleOutlineOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}

export default Keyboard;
