import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../assets/home-icon.svg';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';
import { ReactComponent as LibraryIcon } from '../assets/library-icon.svg';
import { ReactComponent as SpotifyLogo } from '../assets/spotify-logo.svg';
import styled from 'styled-components';

const sidebarOpenClassName = 'sidebar-open';
const sidebarCloseClassName = 'sidebar-closed';
const activeClassName = 'Active';
const DashboardSidebar = styled.div.attrs(props => {
  return {
    className: props.isOpen
      ? sidebarOpenClassName
      : sidebarCloseClassName
  };
})`
  grid-area: sidebar;
  background-color: #08070d;
  transition: width 0.4s ease-out;
  &.${sidebarOpenClassName} {
    width: 200px;
  }
  &.${sidebarCloseClassName} {
    width: 100px;
  }
`;

const SidebarLogo = styled(SpotifyLogo)`
  color: white;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const SidebarItem = styled(NavLink).attrs(props => {
  return {
    activeClassName: activeClassName,
    onClick: e => e.stopPropagation()
  };
})`
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
  &.${activeClassName + '::before'} {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: green;
  }
  &:hover {
    cursor: pointer;
    background-color: #131118;
  }
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;

const SidebarIcon = styled.img`
  width: 1.75em;
  height: 1.75em;
  position: relative;
  top: -0.125em;
  display: inline-block;
  vertical-align: middle;
  ${DashboardSidebar}.${sidebarOpenClassName} & {
    margin-left: 15px;
  }
  ${DashboardSidebar}.${sidebarCloseClassName} & {
    margin-left: 0px;
  }
`;

const SidebarText = styled.span`
  flex: 1;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
  ${DashboardSidebar}.${sidebarOpenClassName} & {
    display: block
  }
  ${DashboardSidebar}.${sidebarCloseClassName} & {
    display: none;
  }
`;

// const Sidebar = ({ currentPath, open, toggleSidebar }) => (
//   <DashboardSidebar isOpen={open} onClick={toggleSidebar}>
//     <SidebarLogo />
//     <SidebarItem exact={true} to={`${currentPath}/`}>
//       <SidebarIcon as={HomeIcon} />
//       <SidebarText>Home</SidebarText>
//     </SidebarItem>
//   </DashboardSidebar>
// );

DashboardSidebar.SidebarLogo = SidebarLogo;
DashboardSidebar.SidebarLink = ({ to, exact, icon, text }) => (
  <SidebarItem to={to} exact={exact}>
    <SidebarIcon as={icon} />
    <SidebarText>{text}</SidebarText>
  </SidebarItem>
);

export default DashboardSidebar;
