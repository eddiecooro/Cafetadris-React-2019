function dispatch(counter, action) {
  switch (action.type) {
    case 'INCREMENT':
      return counter + action.value;
    case 'DECREMENT':
      return counter - action.value;
    case 'MULTIPLY':
      return counter * action.value;
    case 'DIVIDE':
      return counter / action.value;
  }
}

function createCounter(dispatch) {
  let counter = 0;
  let subscribers = [];
  return {
    dispatch: action => {
      counter = dispatch(counter, action);
      subscribers.forEach(fn => {
        fn();
      });
    },
    getValue: () => counter,
    subscribe: fn => {
      subscribers.push(fn);
    }
  };
}

let counter = createCounter(dispatch);
counter.subscribe(() => {
  console.log('City one', counter.getValue());
});
let counter2 = createCounter(dispatch);
counter2.subscribe(() => {
  console.log('City two', counter2.getValue());
});
let counter3 = createCounter(dispatch);
counter3.subscribe(() => {
  console.log('City three', counter3.getValue());
});
let counter4 = createCounter(dispatch);
counter4.subscribe(() => {
  console.log('City four', counter4.getValue());
});
// ...

counter.dispatch({ type: 'INCREMENT', value: 1 });
counter.dispatch({ type: 'INCREMENT', value: 1 });
counter2.dispatch({ type: 'INCREMENT', value: 1 });
counter2.dispatch({ type: 'INCREMENT', value: 3 });
counter2.dispatch({ type: 'MULTIPLY', value: 4 });
counter3.dispatch({ type: 'INCREMENT', value: 122 });
counter.dispatch({ type: 'INCREMENT', value: 1 });

/* Todo */
// const todos = [{ name: 'Get milk', done: true }];

function createTodos(dispatch) {
  let todos = dispatch(undefined, {});
  let subscribers = [];
  return {
    getValue: () => todos,
    dispatch: action => {
      todos = dispatch(todos, action);
      subscribers.forEach(fn => fn());
    },
    subscribe: fn => {
      subscribers.push(fn);
    }
  };
}

let todosDispatch = (todos = [{ name: 'Get milk', done: true }], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, action.todo];
    case 'REMOVE_TODO':
      return todos.filter((todo, index) => index !== action.index);
    case 'TOGGLE_TODO':
      return todos.map((todo, index) =>
        index === action.index ? { ...todo, done: !todo.done } : todo
      );
    default:
      return todos;
  }
};

let todos1 = createTodos(todosDispatch);
todos1.subscribe(() => {
  console.log('Todos are', todos1.getValue());
});

todos1.dispatch({ type: 'ADD_TODO', todo: { name: 'Get kooft', done: false } });
todos1.dispatch({ type: 'TOGGLE_TODO', index: 0 });
