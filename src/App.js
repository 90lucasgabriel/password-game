import React, { useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import Password from './components/Password';

import { Provider } from 'react-redux';

import { store } from './redux/Store';
import AnswerList from './components/AnswerList';

function App() {
  // const [getRandomPassword, addAnswer, answers, password] = PasswordService();

  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <div className='App'>
        <Header className='header' />
        <Password className='password' />
        <div className='hints'>
          <AnswerList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
