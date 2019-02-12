import React, { Component } from 'react';
import Counter from './Counter';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList buttonName="Add Todos Now" />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
