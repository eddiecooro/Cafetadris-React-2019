import React, { Component } from 'react';
import styles from './Counter.module.css';

class Counter extends Component {
  state = {
    value: 0
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p className={styles.number}>{this.state.value}</p>
        <button className={styles.button}>Decrement</button>
        <button className={styles.button}>Increment</button>
      </div>
    );
  }
}

// function Counter(props) {
//   return (
//     <div>
//       <p className={styles.number}>{value}</p>
//       <button className={styles.button}>Increment</button>
//       <button className={styles.button}>Decrement</button>
//     </div>
//   );
// }

export default Counter;
