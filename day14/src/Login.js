import React, { Component } from 'react';
import { css } from 'styled-components/macro';
import LoginForm from './components/LoginForm';
import LoginWithSpotify from './components/LoginWithSpotify';

export class Login extends Component {
  componentDidMount() {
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.from
    ) {
      localStorage.setItem(
        'referredRedirectPath',
        JSON.stringify(this.props.location.state.from)
      );
    }
  }
  render() {
    return (
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}>
        <LoginForm />
        <LoginWithSpotify />
      </div>
    );
  }
}

export default Login;
