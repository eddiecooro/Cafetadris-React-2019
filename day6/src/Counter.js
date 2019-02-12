import React, { Component } from 'react';
import styles from './Counter.module.css';

console.log(styles);

class Counter extends Component {
  state = {
    value: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        value: this.state.value + 1
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p className={styles.number}>{this.state.value}</p>
        <button className={styles.button}>Increment</button>
        <button className={styles.button}>Decrement</button>
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
