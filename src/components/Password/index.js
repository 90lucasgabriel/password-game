import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Fab } from '@material-ui/core';
import {
  addAnswerAction,
  resetAnswerAction,
} from '../../redux/actions/AnswerAction';

import './style.css';

var password = '';
function Password() {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answer.list);

  const [userPassword, setUserPassword] = useState('');
  const [finished, setFinished] = useState(false);

  let right = 0;
  let wrongPosition = 0;
  let wrong = 0;

  function addAnswer(p) {
    if (p.length === 3) {
      checkPasswords(p);
      dispatch(addAnswerAction({ value: p, right, wrongPosition, wrong }));
      document.getElementById('passwordInput').focus();
    }
  }

  const reset = () => {
    right = 0;
    wrongPosition = 0;
    wrong = 0;
    setUserPassword('');
  };

  function newGame() {
    setFinished(false);
    dispatch(resetAnswerAction());
    password = passwordGenerate(3);
    document.getElementById('passwordInput').disabled = false;
    addAnswer(passwordGenerate(3));
  }

  const checkUserPassword = async (value) => {
    const lastChar = value.slice(-1);

    if (value.length > userPassword.length) {
      if (isNaN(lastChar)) {
        return;
      }

      if (userPassword.includes(lastChar)) {
        return;
      }

      setUserPassword(value);
    }

    setUserPassword(value);
  };

  const checkPasswords = (p) => {
    checkHints(p);
    if (password === p) {
      setFinished(true);
      alert(`Parabéns!! Você acertou em ${answers.length} tentativas.`);
      document.getElementById('passwordInput').disabled = true;
      return;
    }
  };

  const checkHints = (p) => {
    const userPasswordArray = p.split('');

    userPasswordArray.map((character, index) => {
      if (password.includes(character)) {
        if (password.indexOf(character) === index) {
          return right++;
        }
        return wrongPosition++;
      }
      return wrong++;
    });
  };

  function passwordGenerate(length) {
    var result = '';
    var characters = '0123456789';
    for (var i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      const character = characters.charAt(index);
      result += character;
      characters = characters.replace(character, '');
    }
    return result;
  }

  useEffect(() => {
    if (answers.length === 0) {
      newGame();
    }

    reset();
  }, [answers]);

  return (
    <div className='passwordWrapper'>
      <input
        className='password'
        type='tel'
        maxLength='3'
        value={userPassword}
        placeholder='000'
        id='passwordInput'
        autoComplete='new-password'
        onChange={(e) => checkUserPassword(e.target.value)}
      />
      <Button
        color='secondary'
        variant='outlined'
        className='checkButton'
        onClick={() => addAnswer(userPassword)}
      >
        Verificar Senha
      </Button>

      {finished ? (
        <Fab
          className='showAnswer'
          variant='extended'
          color='secondary'
          onClick={newGame}
        >
          Novo Jogo
        </Fab>
      ) : (
        <Fab
          className='showAnswer'
          variant='extended'
          color='primary'
          onClick={() => alert(`A senha é: ${password}`)}
        >
          Resposta
        </Fab>
      )}
    </div>
  );
}

export default Password;
