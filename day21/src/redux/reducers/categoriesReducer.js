import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAIL
} from '../actionTypes';
import immer from 'immer';

let initialState = {
  categoriesList: [],
  error: null,
  isLoading: false
};
export default (state = initialState, action) =>
  immer(state, state => {
    switch (action.type) {
      case LOAD_CATEGORIES:
        state.isLoading = true;
        break;
      case LOAD_CATEGORIES_SUCCESS:
        state.isLoading = false;
        state.categoriesList.push(action.payload.categories);
        break;
      case LOAD_CATEGORIES_FAIL:
        state.isLoading = false;
        state.error = action.payload.error;
        break;
    }
  });
