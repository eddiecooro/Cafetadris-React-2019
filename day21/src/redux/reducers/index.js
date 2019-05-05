import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import sliderReducer from './sliderReducer';

export default combineReducers({
  categories: categoriesReducer,
  slider: sliderReducer
});
