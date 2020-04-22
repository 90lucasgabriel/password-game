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
      main: '#4EC6C4',
      A100: '#4EC6C4',
      A200: '#4EC6C4',
      A700: '#4EC6C4',
      A400: '#4EC6C4',
      '100': '#4EC6C4',
      '200': '#4EC6C4',
      '300': '#4EC6C4',
      '400': '#4EC6C4',
      '500': '#4EC6C4',
      '600': '#4EC6C4',
      '700': '#4EC6C4',
      '800': '#4EC6C4',
      '900': '#4EC6C4',
      '50': '#4EC6C4',
      contrastText: '#43A7A7',
    },
    secondary: {
      main: '#FFF',
      A100: '#4EC6C4',
      A200: '#4EC6C4',
      A700: '#4EC6C4',
      A400: '#4EC6C4',
      '100': '#4EC6C4',
      '200': '#4EC6C4',
      '300': '#4EC6C4',
      '400': '#4EC6C4',
      '500': '#4EC6C4',
      '600': '#4EC6C4',
      '700': '#4EC6C4',
      '800': '#4EC6C4',
      '900': '#4EC6C4',
      '50': '#4EC6C4',
      contrastText: '#43A7A7',
    },
    warning: {
      main: '#ffd900',
      A100: '#ffd900',
      A200: '#ffd900',
      A700: '#ffd900',
      A400: '#ffd900',
      '100': '#ffd900',
      '200': '#ffd900',
      '300': '#ffd900',
      '400': '#ffd900',
      '500': '#ffd900',
      '600': '#ffd900',
      '700': '#ffd900',
      '800': '#ffd900',
      '900': '#ffd900',
      '50': '#ffd900',
      contrastText: '#43A7A7',
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
            <Header />
            <Password />
            <AnswerList />
            <Keyboard />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
