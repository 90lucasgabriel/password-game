import { useState, useEffect } from 'react';

function PasswordService() {
  const [password, setPassword] = useState('');
  const [answers, setAnswers] = useState(['1234']);

  const getRandomPassword = async () => {
    // do{
    //   const randomNumber = (Math.floor(Math.random() * 10)).toString();
    //   console.log("getRandomPassword -> randomNumber", randomNumber)

    //   if (password.includes(randomNumber)) {
    //     console.log('numero repetido');
    //     return;
    //   }

    //   setPassword(`${password}${randomNumber}`);
    //   console.log('password', password);
    // } while (password.length === 4);

    // let newPassword = '';
    // newPassword = `${password}1`;
    // await setPassword(newPassword);
    // console.log('password1', password);

    // newPassword = `12`;
    // await setPassword(newPassword);
    // console.log('password2', password);

    // newPassword = `123`;
    // await setPassword(newPassword);
    // console.log('password3', password);

    // newPassword = `1234`;
    // await setPassword(newPassword);
    // console.log('password4', password);

    // console.log('final password', password);
  };


  useEffect(() => {
    getRandomPassword();
  }, []);

  return [
    getRandomPassword,
    answers,
    password,
  ];
}

export default PasswordService;
