import React, { Component } from 'react';
import SpotifyCallback from './SpotifyCallback';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Categories from './Categories';
import Dashboard from './Dashboard';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import Login from './Login';
import NotFound from './NotFound';
import ErrorHandling, {
  ErrorThrowingComponent
} from './components/ErrorHandling';
import Category from './Category';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ErrorHandling /> */}
        {/* <ErrorThrowingComponent /> */}
        <Navbar />
        <ErrorHandling>
          <Switch>
            <Route path="/" exact={true} component={Homepage} />
            <AuthRoute
              path="/categories/:categoryId"
              component={Category}
            />
            <AuthRoute path="/categories" component={Categories} />
            <Route path="/callback" component={SpotifyCallback} />
            <Route path="/login/hello" component={Login} />
            <Route path="/login" component={Login} />
            <AuthRoute path="/dashboard" component={Dashboard} />
            <Route path="/" component={NotFound} />
          </Switch>
        </ErrorHandling>
      </div>
    );
  }
}

export default App;
