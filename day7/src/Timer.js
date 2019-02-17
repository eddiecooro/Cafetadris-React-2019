import React, { Component } from 'react';
import styles from './Timer.module.css';

class Timer extends Component {
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
        <h2>Timer</h2>
        <p className={styles.number}>{this.state.value}</p>
        <button className={styles.button}>Start</button>
        <button className={styles.button}>Pause</button>
        <button className={styles.button}>Reset</button>
      </div>
    );
  }
}

// function Timer(props) {
//   return (
//     <div>
//       <p className={styles.number}>{value}</p>
//       <button className={styles.button}>Start</button>
//       <button className={styles.button}>Pause</button>
//       <button className={styles.button}>Reset</button>
//     </div>
//   );
// }

export default Timer;
