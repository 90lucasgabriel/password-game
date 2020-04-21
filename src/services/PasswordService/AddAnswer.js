import { CheckPasswords } from './CheckPasswords';

export const AddAnswer = ({ answers, currentValue, password }) => {
  if (currentValue.length < 3) {
    return false;
  }

  if (currentValue.length === 3) {
    if (answers.find((a) => a.value === currentValue)) {
      alert('Essa senha já foi inserida.');
      return;
    }
  }

  const { right, wrongPosition, wrong } = CheckPasswords({
    password,
    userPassword: currentValue,
    answers,
  });

  return { value: currentValue, right, wrongPosition, wrong };
};
