import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
  categories: categoriesReducer
});
