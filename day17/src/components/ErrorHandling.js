import React, { Component } from 'react';

export class ErrorThrowingComponent extends Component {
  render() {
    throw new Error('Error happened');
    return <div />;
  }
}

export class ErrorHandling extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(err) {
    console.log('This is error', err);
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true
    };
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    else
      return (
        <div>
          <h2>Oops! Error happened</h2>
        </div>
      );
  }
}

export default ErrorHandling;
