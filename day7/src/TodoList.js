import React, { Component } from 'react';
import styles from './TodoList.module.css';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>Todo list</h2>
        <ul className={styles.tasks}>
          <li>
            Task one
            <button>Edit</button>
          </li>
          <li>
            Task two
            <button>Edit</button>
          </li>
        </ul>
        <input type="text" />
        <button className={styles.button}>Add Todo</button>
      </div>
    );
  }
}

export default TodoList;
