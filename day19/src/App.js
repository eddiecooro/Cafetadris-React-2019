import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux';
// import TodoList from './NormalTodo/TodoList';
import TodoList from './ReduxTodo/TodoList';
// import { ReduxProvider } from './ReduxContext';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
