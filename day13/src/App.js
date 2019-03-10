import React, { Component } from 'react';
import SpotifyCallback from './SpotifyCallback';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Categories from './Categories';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    let yourclientid = '';
    return (
      <div className="App">
        <nav>
          <ul style={{ margin: 0 }}>
            <li>
              <a
                href={`https://accounts.spotify.com/authorize?client_id=${yourclientid}&response_type=token&redirect_uri=http://localhost:3000/callback/`}>
                Login
              </a>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/categories" component={Categories} />
        <Route path="/callback" component={SpotifyCallback} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
