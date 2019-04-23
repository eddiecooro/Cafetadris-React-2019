function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let state = reducer(undefined, {});
  let subscribers = [];
  return {
    getState: () => state,
    dispatch: action => {
      state = reducer(state, action);
      subscribers.forEach(fn => fn());
    },
    subscribe: fn => subscribers.push(fn)
  };
}

function todosReducer(todos = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, action.todo];
    case 'REMOVE_TODO':
      return todos.filter((todo, index) => index !== action.index);
    default:
      return todos;
  }
}

function counterReducer(counter = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return counter + action.value;
    case 'DECREMENT':
      return counter - action.value;
    default:
      return counter;
  }
}

function todosCounterReducer(todoCounter = 0, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return todoCounter + 1;
    case 'REMOVE_TODO':
      return todoCounter - 1;
    default:
      return todoCounter;
  }
}

function combineReducers(reducersObject) {
  return function(state = {}, action) {
    let newState = {};
    Object.keys(reducersObject).forEach(key => {
      newState[key] = reducersObject[key](state[key], action);
    });
    return newState;
  };
}

// let store = createStore((state = {}, action) => {
//   return {
//     todos: todosReducer(state.todos, action),
//     todoCounter: todosCounterReducer(state.todoCounter, action),
//     counter: counterReducer(state.counter, action)
//   };
// });

function compose(...fns) {
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}

function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    let store = createStore(reducer);
    let dispatch = store.dispatch;
    let middlewareApi = {
      getState: store.getState,
      dispatch: dispatch
    };
    let chain = middlewares.map(middleware => middleware(middlewareApi));
    let fakeDispatch = compose(...chain)(store.dispatch);
    // fakeDispatch = thunk(errorHandler(newLogger(store.dispatch))))
    return {
      ...store,
      dispatch: fakeDispatch
    };
  };
}

let logger = store => next => action => {
  console.log('Action', action);
  next(action);
};

let preventBigNumbers = store => next => action => {
  if (
    action.type === 'INCREMENT' &&
    store.getState().counter + action.value >= 1000
  ) {
    return;
  } else {
    return next(action);
  }
};
// let newLogger = next => action => {
//   next(action);
// };
// let lastLogger = action => {
//   next(action)
// }

let store = createStore(
  combineReducers({
    todos: todosReducer,
    todoCounter: todosCounterReducer,
    counter: counterReducer
  }),
  applyMiddleware(logger, preventBigNumbers)
);
store.subscribe(() => console.log(store.getState()));

// let counter = createStore(counterReducer);
// let todos = createStore(todosReducer);

// function addLogger(store) {
//   let actualDispatch = store.dispatch;
//   store.dispatch = action => {
//     console.log('Performing action: ', action);
//     actualDispatch(action);
//   };
// }
// addLogger(store);

store.dispatch({ type: 'INCREMENT', value: 2 });
store.dispatch({ type: 'ADD_TODO', todo: { name: 'get Milk', done: true } });
store.dispatch({ type: 'ADD_TODO', todo: { name: 'get Milk', done: true } });
store.dispatch({ type: 'ADD_TODO', todo: { name: 'get Milk', done: true } });
store.dispatch({ type: 'ADD_TODO', todo: { name: 'get Milk', done: true } });
store.dispatch({ type: 'ADD_TODO', todo: { name: 'get Milk', done: true } });
store.dispatch({ type: 'REMOVE_TODO', index: 2 });
store.dispatch({ type: 'INCREMENT', value: 998 });
