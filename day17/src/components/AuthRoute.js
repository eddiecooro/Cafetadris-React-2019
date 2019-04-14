import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authUtils from '../utils/authUtils';

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authUtils.isUserLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default AuthRoute;
