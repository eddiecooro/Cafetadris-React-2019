import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as HomeIcon } from '../assets/sidebar-home.svg';
import { ReactComponent as LibraryIcon } from '../assets/sidebar-library.svg';
import { ReactComponent as SearchIcon } from '../assets/sidebar-search.svg';
import DashboardSidebar from './DashboardSidebar';
import Home from './Home';
import Search from './Search';
import Libraries from './Libraries';

// const openDashboardKeyframes = keyframes`
//   from {
//     width: 130px;
//   }
//   to {
//     width: 50px;
//   }
// `;

const DashboradGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'sidebar main'
    'player player';
`;

const DashboardMain = styled.div`
  background-color: white;
  grid-area: main;
`;

const DashboardPlayer = styled.div`
  background-color: yellow;
  height: 130px;
  grid-area: player;
`;

export class Dashboard extends Component {
  state = {
    sidebarIsOpen: false
  };

  constructor(props) {
    super(props);
    const currentPath = props.match.path;
    this.routes = [
      {
        path: `${currentPath}/`,
        exact: true,
        name: 'Home',
        icon: HomeIcon,
        component: Home
      },
      {
        path: `${currentPath}/search`,
        name: 'Search',
        icon: SearchIcon,
        component: Search
      },
      {
        path: `${currentPath}/libraries`,
        name: 'Your Libraries',
        icon: LibraryIcon,
        component: Libraries
      }
    ];
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      sidebarIsOpen: !prevState.sidebarIsOpen
    }));
  };

  render() {
    const currentPath = this.props.match.path;
    return (
      <DashboradGrid>
        <DashboardSidebar
          onClick={this.toggleSidebar}
          isOpen={this.state.sidebarIsOpen}>
          <Link to="/">
            <DashboardSidebar.SidebarLogo />
          </Link>
          {this.routes.map(route => (
            <DashboardSidebar.SidebarLink
              exact={route.exact}
              to={route.path}
              text={route.name}
              IconComponent={route.icon}
            />
          ))}
        </DashboardSidebar>
        <DashboardMain>
          {this.routes.map(route => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </DashboardMain>
        <DashboardPlayer />
      </DashboradGrid>
    );
  }
}

export default Dashboard;
