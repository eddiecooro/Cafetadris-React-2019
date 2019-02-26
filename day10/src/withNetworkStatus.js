import React, { Component } from 'react';

/***************** Render Props */
class WithNetworkStatus extends Component {
  state = {
    isActive: navigator.onLine
  };
  componentDidMount() {
    window.addEventListener('online', this.handleStatusChange);
    window.addEventListener('offline', this.handleStatusChange);
  }
  componentWillUnmount() {
    window.removeEventListener('online', this.handleStatusChange);
    window.removeEventListener('offline', this.handleStatusChange);
  }
  handleStatusChange = event => {
    this.setState({
      isActive: event.type === 'online'
    });
  };
  render() {
    return this.props.children({ isActive: this.state.isActive });
  }
}

export default WithNetworkStatus;

/**************** HOC */
// let withNetworkStatus = WrappedComponent => {
//   return class WithNetworkStatusWrapper extends Component {
//     state = {
//       isActive: navigator.onLine
//     };

//     componentDidMount() {
//       window.addEventListener('online', this.handleStatusChange);
//       window.addEventListener('offline', this.handleStatusChange);
//     }

//     componentWillUnmount() {
//       window.removeEventListener('online', this.handleStatusChange);
//       window.removeEventListener('offline', this.handleStatusChange);
//     }

//     handleStatusChange = event => {
//       this.setState({
//         isActive: event.type === 'online'
//       });
//     };

//      render() {
//        return (
//          <WrappedComponent
//            {...this.props}
//            isActive={this.state.isActive}
//          />
//        );
//      }
//   };
// };

// export default withNetworkStatus;
