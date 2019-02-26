import React, { Component } from 'react';

/*************** Render Props *************/

class WithTabActiveStatus extends Component {
  state = {
    isTabActive: !document.hidden
  };
  componentDidMount() {
    document.addEventListener(
      'visibilitychange',
      this.handleVisibilityChange
    );
  }
  handleVisibilityChange = event => {
    console.warn('Event', event.target.hidden);
    this.setState({
      isTabActive: !event.target.hidden
    });
  };
  render() {
    return this.props.children({ isActive: this.state.isTabActive });
  }
}

export default WithTabActiveStatus;

/*************** HOC *************/
// const withTabActiveStatus = WrappedComponent => {
//   return class WithTabActiveStatusWrapper extends Component {
//     state = {
//       isTabActive: !document.hidden
//     };

//     componentDidMount() {
//       document.addEventListener(
//         'visibilitychange',
//         this.handleVisibilityChange
//       );
//     }

//     handleVisibilityChange = event => {
//       this.setState({
//         isTabActive: !event.target.hidden
//       });
//     };

//     render() {
//       return <WrappedComponent isActive={this.state.isTabActive} />;
//     }
//   };
// };

// export default withTabActiveStatus;
