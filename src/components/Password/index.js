import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
} from '@material-ui/core';
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

    const result = PasswordService.AddAnswer({
      password: newPassword || password,
      answers,
      currentValue: userValue || currentValue,
    });

    if (result) {
      if (result === 'duplicated') {
        showDuplicated();
        return;
      }

      if (result.right === 3) {
        showCongratulations();
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

  // Alert Dialog
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogDescription, setDialogDescription] = useState('');

  const showDuplicated = () => {
    setDialogTitle('');
    setDialogDescription('Essa senha já foi inserida.');
    setOpen(true);
  };

  const showCongratulations = () => {
    setDialogTitle(`Senha Correta: ${password}`);
    setDialogDescription(
      `Parabéns!! Você acertou em ${answers.length} tentativas`
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {dialogDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {gameOver ? (
        <Fab
          className='showAnswer'
          variant='extended'
          color='secondary'
          onClick={newGame}
        >
          Novo Jogo
        </Fab>
      ) : null}
    </>
  );
};

export default Password;
