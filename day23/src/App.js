import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import Router from 'utils/router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorHandling, {
  ErrorThrowingComponent
} from './components/ErrorHandling';
import { routesConfig, renderRoutes } from './routes';
import store from './redux';
import { setRouter } from './utils/navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter ref={setRouter}>
        <Provider store={store}>
          <div className="App">
            {/* <ErrorHandling /> */}
            {/* <ErrorThrowingComponent /> */}
            <Navbar />
            <ErrorHandling>
              <Switch>{renderRoutes(routesConfig)}</Switch>
            </ErrorHandling>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
