import React from 'react';
import { Button } from '@material-ui/core';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetAnswerAction } from '../../redux/actions/AnswerAction';

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { password } = useSelector((state) => state.answer);

  const showAnswer = () => {
    console.log('resposta', password)
    alert(`A senha é: ${password}`);
  };

  const newGame = () => {
    dispatch(resetAnswerAction());
  };

  return (
    <div className='toolbar' elevation={3}>
      <Button className='newGameButton' size='small' onClick={showAnswer}>
        Resposta
      </Button>
      <Button className='newGameButton' size='small' onClick={newGame}>
        Novo Jogo
      </Button>
    </div>
  );
}

export default Header;
