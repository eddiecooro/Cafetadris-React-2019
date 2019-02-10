import React from 'react';
import styles from './TodoListFooter.module.css';

function TodoListFooterButton(props) {
  return (
    <span
      className={[styles.footerBtn, props.isActive ? styles.active : ''].join(
        ' '
      )}>
      {props.text}
    </span>
  );
}
function TodoListFooter(props) {
  return (
    <div id="myDIV" className={styles.footer}>
      <TodoListFooterButton isActive={true} text={'All'} />
      <TodoListFooterButton isActive={false} text={'Done'} />
      <TodoListFooterButton isActive={false} text={'Pending'} />
    </div>
  );
}

export default TodoListFooter;
