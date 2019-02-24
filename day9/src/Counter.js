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

  componentDidMount() {
    console.log('ComponentDidMount', this.props);
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate', this.props);
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
        <h2>Counter {this.props.name}</h2>
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
//   let [value, setValue] = useState(0);
//   let increment = () => {
//     setValue(1000);
//   };
//   let decrement = () => {
//     setValue(value - 1);
//   };
//   if (props.min > value) setValue(props.min);
//   else if (props.max < value) setValue(props.max);
//   return (
//     <div>
//       <p className={styles.number}>{value}</p>
//       <button onClick={increment} className={styles.button}>
//         Increment
//       </button>
//       <button onClick={decrement} className={styles.button}>
//         Decrement
//       </button>
//     </div>
//   );
// }

export default Counter;
