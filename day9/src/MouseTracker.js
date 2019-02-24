import React, { Component } from 'react';

export class MouseTracker extends Component {
  square = React.createRef();
  state = {
    mouseX: 0,
    mouseY: 0,
    isMouseDown: false,
    dots: []
  };

  addDot = (x, y) => {
    this.setState((prevState) => {
      return {
        dots: [...prevState.dots, {x,y}]
      }
    })
  }

  handleMouseDown = event => {
    this.setState({ isMouseDown: true });
  };

  handleMouseUp = event => {
    this.setState({ isMouseDown: false });
  };

  handleMouseLeave = event => {
    this.setState({ isMouseDown: false });
  };

  handleMouseEnter = event => {
    if (event.buttons === 1) {
      this.setState({ isMouseDown: true });
    }
  };

  handleMouseMove = event => {
    this.setState({
      mouseX: event.pageX - this.square.current.offsetLeft,
      mouseY: event.pageY - this.square.current.offsetTop,
    }, () => {
      if(this.state.isMouseDown) {
        console.log(this.state)
        this.addDot(this.state.mouseX, this.state.mouseY)
      }
    });
  };

  render() {
    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <h2>Mouse Tracker</h2>
        <span>X: {this.state.mouseX}</span>
        <span>Y: {this.state.mouseY}</span>
        <span>isMouseDown: {String(this.state.isMouseDown)}</span>
        <div
          ref={this.square}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter}
          style={{
            border: '5px solid black',
            width: '400px',
            height: '400px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {this.state.dots.map(dot => <div style={{width: 20, height: 20,borderRadius: 10,backgroundColor: 'black', position: 'absolute', left: dot.x - 10, top: dot.y - 10}}/>)}
        </div>
      </div>
    );
  }
}

export default MouseTracker;
