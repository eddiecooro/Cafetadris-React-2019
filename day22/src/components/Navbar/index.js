import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import authUtils from '../../utils/authUtils';
import NavbarLink from '../uiComponent/NavbarLink';

const AuthLink = ({ AuthComponent, UnauthComponent }) => {
  if (authUtils.isUserLoggedIn()) return AuthComponent;
  else return UnauthComponent;
};

const Navbar = props => {
  return (
    <nav>
      <ul
        css={css`
          display: flex;
          flex-direction: row;
          list-style: none;
          padding-left: 0px;
          background-color: #09070e;
          margin: 0px;
        `}>
        <NavbarLink>
          <AuthLink
            AuthComponent={<Link to="/dashboard">Dashboard</Link>}
            UnauthComponent={<Link to="/login">Login</Link>}
          />
        </NavbarLink>
        <NavbarLink>
          <Link to="/categories">Categories</Link>
        </NavbarLink>
      </ul>
    </nav>
  );
};

export default Navbar;
