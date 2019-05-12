import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './TransitionTest.module.css';

// my - div - enter;
// my - div - enter - active;
// my - div - enter - done;
// my - div - exit;
// my - div - exit - active;
// my - div - exit - done;
// my - div - appear;
// my - div - appear - active;
// my - div - appear - done;

function TransitionTest() {
  const [inProp, setInProp] = React.useState(false);
  React.useEffect(() => {
    setInterval(() => setInProp(inProp => !inProp), 5000);
  }, []);

  return (
    <CSSTransition
      appear={true}
      classNames={{
        enter: styles.myDivEnter,
        enterActive: styles.myDivEnterActive,
        enterDone: styles.myDivEnterDone,
        appear: '',
        appearActive: '',
        appearDone: '',
        exit: styles.myDivExitActive,
        exitActive: styles.myDivExitActive,
        exitDone: styles.myDivExitActive
      }}
      timeout={2000}
      in={inProp}>
      <div className={styles.myDiv}>
        <p>InProp: {String(inProp)}</p>
      </div>
    </CSSTransition>
  );
}

export default TransitionTest;
