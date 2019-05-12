import React from 'react';
import { Route } from 'react-router-dom';
import AuthRoute from '../components/AuthRoute';

import Homepage from './Homepage';
import Category from './Category';
import Categories from './Categories';
import SpotifyCallback from './SpotifyCallback';
import Login from './Login';
import NotFound from './NotFound';
import dashboardConfig from './dashboard';

export const routesConfig = [
  {
    path: '/',
    exact: true,
    component: Homepage
  },
  {
    path: '/categories/:categoryId',
    component: Category,
    auth: true
  },
  {
    path: '/categories',
    component: Categories,
    auth: true
  },
  {
    path: '/callback',
    component: SpotifyCallback
  },
  {
    path: '/login',
    component: Login
  },
  dashboardConfig,
  {
    path: '/',
    component: NotFound
  }
];

export const renderRoutes = routes => {
  return routes.map(route => {
    return route.auth ? (
      <AuthRoute {...route} />
    ) : (
      <Route
        {...route}
        component={undefined}
        render={props => {
          return <route.component {...props} routes={route.routes} />;
        }}
      />
    );
  });
};
