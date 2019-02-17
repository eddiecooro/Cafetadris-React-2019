import React from 'react';
import Timer from './Timer';
import Counter from './Counter';
import TodoList from './TodoList';
import MouseTracker from './MouseTracker';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      <hr />
      <Timer />
      <hr />
      <Counter />
      <hr />
      <MouseTracker />
    </div>
  );
}

export default App;
