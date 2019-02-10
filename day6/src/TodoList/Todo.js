import React from 'react';
import styles from './Todo.module.css';

function Todo({ todo }) {
  return (
    <li
      className={[styles.listitem, todo.done ? styles.checked : ''].join(' ')}>
      {todo.name}
      <span className={styles.close}>&#x00D7;</span>
    </li>
  );
}

export default Todo;
