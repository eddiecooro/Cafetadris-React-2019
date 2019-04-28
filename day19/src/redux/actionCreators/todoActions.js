import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  UNDO
} from '../actionTypes';

export const undo = () => ({ type: UNDO });
export const addTodo = name => ({ type: ADD_TODO, payload: { name } });
export const editTodo = (todoId, name) => ({
  type: EDIT_TODO,
  payload: { id: todoId, name }
});
export const removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: { id: todoId }
});
export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  payload: { id: todoId }
});
export const setFilter = filterName => ({
  type: SET_FILTER,
  payload: { filterName }
});
