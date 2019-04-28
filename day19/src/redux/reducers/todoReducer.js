import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  SET_FILTER,
  UNDO
} from '../actionTypes';

let initialState = {
  currentId: 0,
  todosList: [],
  history: [],
  filter: 'All'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        currentId: state.currentId + 1,
        todosList: [
          ...state.todosList,
          { id: state.currentId, name: action.payload.name, done: false }
        ],
        history: [...state.history, state]
      };
    case EDIT_TODO:
      return {
        ...state,
        todosList: state.todosList.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, name: action.payload.name }
            : todo
        ),
        history: [...state.history, state]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todosList: state.todosList.filter(
          todo => todo.id !== action.payload.id
        ),
        history: [...state.history, state]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todosList: state.todosList.map(todo =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        ),
        history: [...state.history, state]
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload.filterName,
        history: [...state.history, state]
      };
    case UNDO:
      return state.history[state.history.length - 1];
    default:
      return state;
  }
};
