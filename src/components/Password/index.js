import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Fab } from '@material-ui/core';
import {
  addAnswerAction,
  resetAnswerAction,
  addValueAction,
} from '../../redux/actions/AnswerAction';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

import './style.css';

var password = '';
function Password() {
  const dispatch = useDispatch();
  const { list: answers, value: currentValue } = useSelector((state) => state.answer);

  const [userPassword, setUserPassword] = useState('');
  const [finished, setFinished] = useState(false);

  let right = 0;
  let wrongPosition = 0;
  let wrong = 0;

  function addAnswer(p) {
    if (p.length === 3) {
      if (answers.find((a) => a.value === p)) {
        return alert('Essa senha já foi inserida.');
      }
      checkPasswords(p);
      dispatch(addAnswerAction({ value: p, right, wrongPosition, wrong }));
    }
  }

  const reset = () => {
    right = 0;
    wrongPosition = 0;
    wrong = 0;
    dispatch(addValueAction(''));
    setUserPassword('');
  };

  function newGame() {
    setFinished(false);
    dispatch(resetAnswerAction());
    password = passwordGenerate(3);
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

      dispatch(addValueAction(value));
      // setUserPassword(value);
    }
    
    dispatch(addValueAction(value));
    // setUserPassword(value);
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
            onChange={(e) => checkUserPassword(e.target.value)}
            disabled={true}
          />
          <Button
            color='secondary'
            variant='contained'
            className='checkButton'
            onClick={() => addAnswer(userPassword)}
            startIcon={<LockOutlinedIcon />}
          >
            <span className='checkButtonText'>Verificar Senha</span>
          </Button>
        </div>

        <div className='topBackground'></div>
      </div>

      <Fab
        className='showAnswer'
        variant='extended'
        color={finished ? 'secondary' : 'primary'}
        onClick={finished ? newGame : () => alert(`A senha é: ${password}`)}
      >
        {finished ? 'Novo Jogo' : 'Resposta'}
      </Fab>
    </>
  );
}

export default Password;
