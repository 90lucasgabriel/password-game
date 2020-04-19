export const ADD_ANSWER = 'ADD_ANSWER';
export const RESET_ANSWER = 'RESET_ANSWER';

export function addAnswerAction(data) {
  return { type: ADD_ANSWER, payload: data };
}

export function resetAnswerAction() {
  return { type: RESET_ANSWER};
}
