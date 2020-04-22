import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetAnswerAction } from '../../redux/actions/AnswerAction';

function Header() {
  const dispatch = useDispatch();
  const { password } = useSelector((state) => state.answer);

  const newGame = () => {
    dispatch(resetAnswerAction());
  };

  // Alert Dialog
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogDescription, setDialogDescription] = useState('');

  const showDialog = () => {
    setDialogTitle('Resposta');
    setDialogDescription(`A senha é: ${password}`);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='toolbar' elevation={3}>
      <Button className='newGameButton' size='small' onClick={showDialog}>
        Resposta
      </Button>
      <Button className='newGameButton' size='small' onClick={newGame}>
        Novo Jogo
      </Button>

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
    </div>
  );
}

export default Header;
