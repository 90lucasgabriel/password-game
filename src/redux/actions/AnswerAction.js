export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_VALUE = 'ADD_VALUE';
export const RESET_VALUE = 'RESET_VALUE';
export const RESET_ANSWER = 'RESET_ANSWER';

export function addAnswerAction(data) {
  return { type: ADD_ANSWER, payload: data };
}

export function addValueAction(data) {
  return { type: ADD_VALUE, payload: data };
}

export function resetValueAction() {
  return { type: RESET_VALUE };
}

export function resetAnswerAction() {
  return { type: RESET_ANSWER };
}
