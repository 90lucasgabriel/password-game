import { CheckHints } from './CheckHints';

export const CheckPasswords = ({ password, userPassword, answers }) => {
  const hints = CheckHints({ password, userPassword });

  return hints;
};
