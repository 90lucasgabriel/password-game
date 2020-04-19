import { combineReducers } from 'redux';
import answer from './reducers/AnswerReducer';

const appReducer = combineReducers({
  answer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;