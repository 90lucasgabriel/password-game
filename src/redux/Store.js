import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'

import reducer from "./Reducer";

const middleware = applyMiddleware(thunkMiddleware);

export const store = createStore(reducer, middleware);
