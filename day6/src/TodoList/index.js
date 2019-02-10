import React from 'react';
import TodoListHeader from './TodoListHeader';
import Todo from './Todo';

import styles from './index.module.css';
import TodoListFooter from './TodoListFooter';

const todos = [
  {
    id: 1,
    name: 'Buy milk',
    done: false
  },
  {
    id: 2,
    name: 'Buy Dough',
    done: true
  },
  {
    id: 3,
    name: 'Buy Kooft',
    done: false
  }
];

function TodoList(props) {
  return (
    <>
      <TodoListHeader />
      <ul className={styles.list}>
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
      <TodoListFooter />
    </>
  );
}

export default TodoList;
