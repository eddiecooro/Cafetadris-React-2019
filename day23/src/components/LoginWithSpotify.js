import React, { Component } from 'react';
import Button from './uiComponent/Button';
import AppLink from './uiComponent/AppLink';

let yourclientid = '451764dd4587472590d910723e9e2beb';
export class LoginWithSpotify extends Component {
  render() {
    return (
      <Button>
        <AppLink
          href={`https://accounts.spotify.com/authorize?client_id=${yourclientid}&response_type=token&redirect_uri=http://localhost:3000/callback/&scopes=user-top-read`}>
          Login With Spotify
        </AppLink>
      </Button>
    );
  }
}

export default LoginWithSpotify;
