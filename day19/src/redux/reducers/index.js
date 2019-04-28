import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

let rootReducer = combineReducers({
  todos: todoReducer
});

export default rootReducer;
