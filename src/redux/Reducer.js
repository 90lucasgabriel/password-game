import { combineReducers } from 'redux';
import { answer, game } from './reducers';

const appReducer = combineReducers({
  answer,
  game,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
