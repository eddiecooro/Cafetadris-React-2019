import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory as createHistory } from 'history';

export default class BrowserRouter extends React.Component {
  history = createHistory(this.props);

  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}
