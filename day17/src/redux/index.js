import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

let logger = store => next => action => {
  console.group('Dispatching:', action.type);
  console.log('payload is:', action.payload);
  console.log('state was:', store.getState());
  let newState = next(action);
  console.log('state became:', store.getState());
  console.groupEnd('Dispatching:', action.type);
  return newState;
};

let thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

export default createStore(rootReducer, applyMiddleware(logger, thunk));
