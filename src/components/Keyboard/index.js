import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addValueAction,
  removeValueAction,
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

  // const resetValue = () => {
  //   return dispatch(resetValueAction());
  // };

  const removeValue = () => {
    if (currentValue.length > 0) {
      return dispatch(removeValueAction(currentValue));
    }
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

  return (
    <>
      <div className='keyboardWrapper'>
        <div className='keyboardActionWrapper keyboardActionLeft'>
          <Button
            className='keyboardAction'
            color='secondary'
            variant='contained'
            size='large'
            onClick={removeValue}
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

        <div className='keyboardActionWrapper keyboardActionRight'>
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
    </>
  );
}

export default Keyboard;
