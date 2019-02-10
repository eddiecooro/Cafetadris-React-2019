import React from 'react';
import styles from './TodoListHeader.module.css';

function TodoListHeader(props) {
  return (
    <div id="myDIV" className={styles.header}>
      <h2>My To Do List</h2>
      <input type="text" className={styles.addInput} placeholder="Title..." />
      <span className={styles.addBtn}>Add</span>
    </div>
  );
}

export default TodoListHeader;
