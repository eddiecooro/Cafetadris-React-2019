import React, { Component } from 'react';

export class MouseTracker extends Component {
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
        <div
          style={{
            border: '5px solid black',
            width: '400px',
            height: '400px'
          }}
        />
      </div>
    );
  }
}

export default MouseTracker;
