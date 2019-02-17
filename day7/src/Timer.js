import React, { Component } from 'react';
import styles from './Timer.module.css';

class Timer extends Component {
  state = {
    value: 0
  };
  interval = null;

  componentWillUnmount() {
    this.reset();
  }

  toggle = () => {
    if (this.state.started) {
      this.pause();
    } else {
      this.start();
    }
  };

  start = () => {
    // console.log(this.interval);
    if (!this.interval) {
      this.setState({
        started: true
      });
      this.interval = setInterval(() => {
        // console.log('After one second');
        this.setState(prevState => {
          return {
            value: prevState.value + 1
          };
        });
      }, 1000);
    }
  };

  pause = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.setState({
        started: false
      });
      this.interval = null;
    }
  };

  reset = () => {
    this.pause();
    this.setState({
      value: 0
    });
  };

  render() {
    return (
      <div>
        <h2>Timer</h2>
        <p className={styles.number}>{this.state.value}</p>
        <button onClick={this.toggle} className={styles.button}>
          {this.state.started ? 'Pause' : 'Start'}
        </button>
        <button onClick={this.reset} className={styles.button}>
          Reset
        </button>
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
