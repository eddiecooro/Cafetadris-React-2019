import React, { Component } from 'react';
import Timer from './Timer';
import Counter from './Counter';
import TodoList from './TodoList';
import MouseTracker from './MouseTracker';
import './App.css';

class App extends Component {
  state = {
    showTimer: false
  };

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     showTimer: !this.state.showTimer
    //   });
    // }, 2000);
  }

  render() {
    return (
      <div className="App">
        <TodoList />
        <hr />
        {/* {this.state.showTimer ? <Timer /> : null} */}
        <Timer />
        <hr />
        <Counter />
        <hr />
        <MouseTracker />
      </div>
    );
  }
}

export default App;
