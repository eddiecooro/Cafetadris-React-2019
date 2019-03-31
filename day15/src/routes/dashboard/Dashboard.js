import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar';
import { renderRoutes } from '..';

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

  toggleSidebar = () => {
    this.setState(prevState => ({
      sidebarIsOpen: !prevState.sidebarIsOpen
    }));
  };

  render() {
    const currentPath = this.props.match.path;
    console.log(this.props.routes);
    return (
      <DashboradGrid>
        <DashboardSidebar
          onClick={this.toggleSidebar}
          isOpen={this.state.sidebarIsOpen}>
          <Link to="/">
            <DashboardSidebar.SidebarLogo />
          </Link>
          {this.props.routes.map(route => (
            <DashboardSidebar.SidebarLink
              exact={route.exact}
              to={route.path}
              text={route.name}
              IconComponent={route.icon}
            />
          ))}
        </DashboardSidebar>
        <DashboardMain>
          {renderRoutes(this.props.routes)}
        </DashboardMain>
        <DashboardPlayer />
      </DashboradGrid>
    );
  }
}

export default Dashboard;
