import React, { Component } from 'react';
import SpotifyCallback from './SpotifyCallback';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Categories from './Categories';

class App extends Component {
  render() {
    let yourclientid = '';
    return (
      <div className="App">
        {
          <nav>
            <ul>
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
        }
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/categories" component={Categories} />
        <Route path="/callback" component={SpotifyCallback} />
      </div>
    );
  }
}

export default App;
