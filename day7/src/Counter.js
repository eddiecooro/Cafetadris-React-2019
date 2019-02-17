import React, { Component, useState } from 'react';
import styles from './Counter.module.css';

class Counter extends Component {
  state = {
    value: 0
  };

  static defaultProps = {
    max: Infinity,
    min: -Infinity
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (state.value < nextProps.min) {
      return {
        value: nextProps.min
      };
    } else if (state.value > nextProps.max) {
      return {
        value: nextProps.max
      };
    } else {
      return null;
    }
  }

  increment = () => {
    this.setState(prevState => {
      return {
        value: Math.min(this.props.max, prevState.value + 1)
      };
    });
  };

  decrement = () => {
    this.setState(prevState => {
      return {
        value: Math.max(this.props.min, prevState.value - 1)
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p className={styles.number}>{this.state.value}</p>
        <button onClick={this.increment} className={styles.button}>
          Increment
        </button>
        <button onClick={this.decrement} className={styles.button}>
          Decrement
        </button>
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
