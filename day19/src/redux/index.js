import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';

let logger = store => next => action => {
  console.log('dispatching:', action);
  let newState = next(action);
  console.log('state is:', store.getState());
  console.log();
  return newState;
};

let store = createStore(rootReducer, applyMiddleware(logger));

export default store;
