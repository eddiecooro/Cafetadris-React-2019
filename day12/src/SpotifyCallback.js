import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class SpotifyCallback extends Component {
  componentDidMount() {
    let props = new URLSearchParams(
      this.props.location.hash.slice(1)
    );
    let accessToken = props.get('access_token');
    localStorage.setItem('access_token', accessToken);
  }

  render() {
    return <Redirect to={'/'} />;
  }
}

export default SpotifyCallback;
