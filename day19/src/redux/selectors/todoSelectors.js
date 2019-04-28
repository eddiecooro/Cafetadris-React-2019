export const getTodos = state => state.todos.todosList;
export const getHistory = state => state.todos.history;
export const getFilter = state => state.todos.filter;
export const getFilteredTodos = state => {
  let todos = getTodos(state);
  switch (getFilter(state)) {
    case 'All':
      return todos;
    case 'Dones':
      return todos.filter(t => t.done);
    case 'Un-Dones':
      return todos.filter(t => !t.done);
  }
};
