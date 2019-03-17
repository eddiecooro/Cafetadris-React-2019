import React, { Component } from 'react';
import SpotifyCallback from './SpotifyCallback';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Categories from './Categories';
import Dashboard from './Dashboard';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact={true} component={Homepage} />
        <AuthRoute path="/categories" component={Categories} />
        <Route path="/callback" component={SpotifyCallback} />
        <Route path="/login" component={Login} />
        <AuthRoute path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
