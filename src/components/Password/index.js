import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Fab } from '@material-ui/core';
import {
  resetAnswerAction,
  addPasswordAction,
  resetValueAction,
  addAnswerAction,
} from '../../redux/actions/AnswerAction';
import { gameOverAction } from '../../redux/actions/GameAction';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

import './style.css';
import { PasswordService } from '../../services';

var newPassword = '';
var userPassword = '';
const Password = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { list: answers, value: currentValue, password } = useSelector(
    (state) => state.answer
  );
  const { gameOver } = useSelector((state) => state.game);

  function addAnswer(userValue) {
    if (gameOver) {
      return;
    }

    const { list: answers, value, password: passwordState } = state.answer;
    let val = userValue || value;
    let pas = newPassword || passwordState;

    const result = PasswordService.AddAnswer({
      password: pas,
      answers,
      currentValue: val,
    });

    if (result) {
      if (result.right === 3) {
        alert(`Parabéns!! Você acertou em ${answers.length} tentativas`);
        return dispatch(gameOverAction(true));
      }

      dispatch(addAnswerAction(result));
      dispatch(resetValueAction());
    }
  }

  function newGame() {
    dispatch(resetAnswerAction());
    dispatch(gameOverAction(false));

    newPassword = PasswordService.PasswordGenerate(3);
    dispatch(addPasswordAction(newPassword));

    userPassword = PasswordService.PasswordGenerate(3);
    addAnswer(userPassword);
  }

  useEffect(() => {
    if (answers.length === 0) {
      newGame();
    }
  }, [answers]);

  return (
    <>
      <div className='passwordWrapper'>
        <div className='inputsWrapper'>
          <input
            className={currentValue.length > 0 ? 'password' : 'emptyPassword'}
            type='tel'
            maxLength='3'
            placeholder='Digite uma senha com 3 dígitos diferentes.'
            id='passwordInput'
            autoComplete='new-password'
            value={currentValue}
            disabled={true}
          />
          <Button
            color='secondary'
            variant='contained'
            className='checkButton'
            onClick={() => addAnswer(currentValue)}
            startIcon={
              gameOver ? <LockOpenOutlinedIcon /> : <LockOutlinedIcon />
            }
          >
            <span className='checkButtonText'>
              {gameOver ? 'Senha Correta' : 'Verificar Senha'}
            </span>
          </Button>
        </div>

        <div className='topBackground'></div>
      </div>

      <Fab
        className='showAnswer'
        variant='extended'
        color={gameOver ? 'secondary' : 'primary'}
        onClick={gameOver ? newGame : () => alert(`A senha é: ${password}`)}
      >
        {gameOver ? 'Novo Jogo' : 'Resposta'}
      </Fab>
    </>
  );
};

export default Password;
