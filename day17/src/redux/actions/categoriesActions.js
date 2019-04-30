import api from '../../api';
import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAIL
} from '../actionTypes';

export let loadCategories = () => (dispatch, getState) => {
  dispatch({ type: LOAD_CATEGORIES });
  api.categories
    .getAll()
    .then(res => dispatch(loadCategoriesSuccess(res.categories.items)))
    .catch(err => dispatch(loadCategoriesFail(err)));
};

export let loadCategoriesSuccess = categories => ({
  type: LOAD_CATEGORIES_SUCCESS,
  payload: {
    categories
  }
});
export let loadCategoriesFail = error => ({
  type: LOAD_CATEGORIES_FAIL,
  payload: {
    error
  }
});
