import React, { useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import Password from './components/Password';

import { Provider } from 'react-redux';

import { store } from './redux/Store';
import AnswerList from './components/AnswerList';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Keyboard from './components/Keyboard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#041641',
    },
    secondary: {
      main: '#ffc400',
    },
  },
});

function App() {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className='appWrapper'>
          <div className='app'>
            <Header className='header' />
            <Password className='password' />
            <div className='hints'>
              <AnswerList />
            </div>
          <Keyboard />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
