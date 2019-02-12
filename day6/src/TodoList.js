import React, { Component } from 'react';
import styles from './TodoList.module.css';

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul className={styles.tasks}>
          <li>Task one</li>
          <li>Task two</li>
        </ul>
        <input type="text" />
        <button className={styles.button}>
          {this.props.buttonName}
        </button>
      </div>
    );
  }
}

export default TodoList;
