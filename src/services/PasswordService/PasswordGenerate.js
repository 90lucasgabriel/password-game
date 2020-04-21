const PasswordGenerate = (length) => {
  var result = '';
  var characters = '0123456789';

  for (var i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    const character = characters.charAt(index);
    result += character;
    characters = characters.replace(character, '');
  }

  return result;
};

export default PasswordGenerate;
