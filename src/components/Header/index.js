import React from 'react';
import { Button, Paper } from '@material-ui/core';

import './style.css';
import { useDispatch } from 'react-redux';
import { resetAnswerAction } from '../../redux/actions/AnswerAction';

function Header() {
  const dispatch = useDispatch();

  function newGame() {
    dispatch(
      resetAnswerAction()
    );
  }
  return (
    <Paper className='toolbar' elevation={3}>
      <div>Descubra a Senha</div>
      <Button className='newGameButton' onClick={newGame}>Novo Jogo</Button>
    </Paper>
  );
}

export default Header;
