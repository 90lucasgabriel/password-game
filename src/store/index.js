import { createStore } from 'redux';

const INITIAL_STATE = {
  data: ['Resposta 1', 'Reposta 2'],
};

function answers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ANSWER':
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}

const store = createStore(answers);

export default store;
