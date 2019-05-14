import React, { Component } from 'react';
import Timer from './Timer';
import Counter from './Counter';
import TodoList from './TodoList';
import MouseTracker from './MouseTracker';
import './App.css';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

class App extends Component {
  state = {
    showTimer: false,
    value: 0
  };

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     showTimer: !this.state.showTimer
    //   });
    // }, 2000);
    // setInterval(() => {
    //   this.setState(prevState => {
    //     return {
    //       value: prevState.value + 1
    //     };
    //   });
    // }, 6000);
  }

  render() {
    return (
      <div className="App">
        <TodoList />
        <hr />
        {/* {this.state.showTimer ? <Timer /> : null} */}
        <Timer />
        <hr />
        <Counter min={this.state.value} />
        <hr />
        <MouseTracker />
      </div>
    );
  }
}

export default App;
