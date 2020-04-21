export const ADD_PASSWORD = 'ADD_PASSWORD';
export const ADD_VALUE = 'ADD_VALUE';
export const ADD_ANSWER = 'ADD_ANSWER';
export const GAME_OVER = 'GAME_OVER';
export const RESET_VALUE = 'RESET_VALUE';
export const RESET_ANSWER = 'RESET_ANSWER';

export function addPasswordAction(data) {
  return { type: ADD_PASSWORD, payload: data };
}

export function addValueAction(data) {
  return { type: ADD_VALUE, payload: data };
}

export function addAnswerAction(data) {
  return { type: ADD_ANSWER, payload: data };
}

export function gameOverAction(data) {
  return { type: GAME_OVER, payload: data };
}

export function resetValueAction() {
  return { type: RESET_VALUE };
}

export function resetAnswerAction() {
  return { type: RESET_ANSWER };
}

