import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  SET_FILTER,
  UNDO
} from '../actionTypes';
import immer from 'immer';

let initialState = {
  currentId: 0,
  todosList: [],
  history: [],
  filter: 'All'
};

export default (state = initialState, action) =>
  immer(state, state => {
    switch (action.type) {
      case ADD_TODO:
        state.todosList.push({
          id: state.currentId,
          name: action.payload.name,
          done: false
        });
        state.currentId++;
        state.history.push(state);
      case EDIT_TODO:
        state.todosList = state.todosList.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, name: action.payload.name }
            : todo
        );
        state.history.push(state);
      case REMOVE_TODO:
        state.todosList = state.todosList.filter(
          todo => todo.id !== action.payload.id
        );
        state.history.push(state);
      case TOGGLE_TODO:
        state.todosList = state.todosList.map(todo =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        );
        state.history.push(state);
      case SET_FILTER:
        state.filter = action.payload.filterName;
        state.history.push(history);
      case UNDO:
        return state.history[state.history.length - 1];
    }
  });
