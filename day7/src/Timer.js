import React, { Component, useState, useCallback } from 'react';
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

// let interval = null;
// function Timer(props) {
//   let [value, setValue] = useState(0);
//   let [started, setStarted] = useState(false);

//   let start = useCallback(() => {
//     if (!interval) {
//       setStarted(true);
//       interval = setInterval(() => {
//         setValue(prevValue => prevValue + 1);
//       }, 1000);
//     }
//   }, [interval]);

//   let pause = useCallback(() => {
//     if (interval) {
//       setStarted(false);
//       clearInterval(interval);
//       interval = null;
//     }
//   }, [interval]);

//   let reset = useCallback(() => {
//     pause();
//     setValue(0);
//   }, []);

//   let toggle = useCallback(() => {
//     if (!started) start();
//     else pause();
//   }, [started]);

//   return (
//     <div>
//       <p className={styles.number}>{value}</p>
//       <button onClick={toggle} className={styles.button}>
//         {started ? 'Pause' : 'Start'}
//       </button>
//       <button onClick={reset} className={styles.button}>
//         Reset
//       </button>
//     </div>
//   );
// }

export default Timer;
