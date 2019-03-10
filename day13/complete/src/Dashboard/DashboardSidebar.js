import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Spotify } from '../assets/spotify.svg';

const activeClassName = 'Active';
const sidebarOpenClassName = 'sidebar-open';
const sidebarCloseClassName = 'sidebar-close';

const DashboardSidebar = styled.div.attrs(props => ({
  className: props.isOpen ? 'sidebar-open' : 'sidebar-close'
}))`
  width: 100px;
  transition: width 0.5s ease-out;
  background-color: #09070e;
  grid-area: sidebar;
  &.${sidebarCloseClassName} {
    width: 100px;
  }
  &.${sidebarOpenClassName} {
    width: 200px;
  }
`;

const SidebarLink = styled(NavLink).attrs(props => ({
  activeClassName,
  onClick: e => e.stopPropagation()
}))`
  position: relative;
  display: flex;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 7px;
  width: 100%;
  color: white;
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    background-color: #131118;
  }
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }
  &::before {
    content: '';
    width: 5px;
    background-color: green;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: none;
  }
  &.${activeClassName + '::before'} {
    display: block;
  }
`;

const SidebarIcon = styled.img`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 1.75em;
  height: 1.75em;
  top: -0.125em;
  ${DashboardSidebar}.${sidebarOpenClassName} & {
    padding-left: 5px;
  }
  
`;

const SidebarText = styled.span`
  display: none;
  flex: 1;
  padding-left: 5px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${DashboardSidebar}.${sidebarOpenClassName} & {
    display: block;
  }
`;

const SidebarLogo = styled(Spotify)`
  padding: 15px 10px;
  margin-bottom: 20px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

DashboardSidebar.SidebarLink = ({
  IconComponent,
  text,
  to,
  exact
}) => (
  <SidebarLink to={to} exact={exact}>
    {IconComponent ? <SidebarIcon as={IconComponent} /> : null}
    {text && <SidebarText>{text}</SidebarText>}
  </SidebarLink>
);

DashboardSidebar.SidebarLogo = props => (
  <SidebarLogo color={'white'} {...props} />
);

export default DashboardSidebar;
