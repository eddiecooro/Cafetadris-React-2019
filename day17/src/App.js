import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import ErrorHandling, {
  ErrorThrowingComponent
} from './components/ErrorHandling';
import { routesConfig, renderRoutes } from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ErrorHandling /> */}
        {/* <ErrorThrowingComponent /> */}
        <Navbar />
        <ErrorHandling>
          <Switch>{renderRoutes(routesConfig)}</Switch>
        </ErrorHandling>
      </div>
    );
  }
}

export default App;
