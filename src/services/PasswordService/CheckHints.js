export const CheckHints = ({ password, userPassword }) => {
  const userPasswordArray = userPassword.split('');
  let hints = { right: 0, wrongPosition: 0, wrong: 0 };
  
  userPasswordArray.map((character, index) => {
    if (password.includes(character)) {
      if (password.indexOf(character) === index) {
        return hints.right++;
      }
      return hints.wrongPosition++;
    }
    return hints.wrong++;
  });

  return hints;
};
