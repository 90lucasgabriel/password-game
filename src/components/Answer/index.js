import React from 'react';
import { Paper } from '@material-ui/core';

import './style.css';

function Answer({ value, right, wrongPosition, wrong }) {
  return (
    <Paper className='result' elevation={3}>
      <div className='value'>{value}</div>
      <div className='hint'>
        <ul>
          <li>{right} número(s) certo(s) no lugar certo.</li>
          <li>{wrongPosition} número(s) certo(s) no lugar errado.</li>
          <li>{wrong} número(s) errado(s).</li>
        </ul>
      </div>
    </Paper>
  );
}

export default Answer;
