import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as HomeIcon } from '../assets/home-icon.svg';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';
import { ReactComponent as LibraryIcon } from '../assets/library-icon.svg';
import { ReactComponent as SpotifyLogo } from '../assets/spotify-logo.svg';
import DashboardSidebar from './DashboardSidebar';
import Home from './Home';
import Search from './Search';
import Libraries from './Libraries';

// export class Dashboard extends Component {
//   render() {
//     return (
//       <div>
//         <PrimaryButton>button</PrimaryButton>
//       </div>
//     );
//   }
// }

// const openSidebarAnimation = keyframes`
//   from {
//     width: 100px;
//   }
//   to {
//     width: 200px;
//   }
// `;

const DashboardGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 100px;
  grid-template-areas:
    'sidebar main'
    'player player';
`;

// const MyComponent = props => {
//   console.log(props);
//   return null;
// };

// const Hello = styled(MyComponent)`
//   color: blue;
// `;

const DashboardMain = styled.div`
  grid-area: main;
  background-color: blue;
`;

const DashboardPlayer = styled.div`
  grid-area: player;
  background-color: yellow;
`;

class Dashboard extends Component {
  state = {
    open: false
  };

  constructor(props) {
    super(props);
    const currentPath = props.match.path;
    this.routes = [
      {
        name: 'Home',
        path: `${currentPath}/`,
        exact: true,
        icon: HomeIcon,
        component: Home
      },
      {
        name: 'Search',
        path: `${currentPath}/search`,
        icon: SearchIcon,
        component: Search
      },
      {
        name: 'Your Libraries',
        path: `${currentPath}/libraries`,
        icon: LibraryIcon,
        component: Libraries
      }
    ];
  }

  handleClick = () => {
    this.setState(prevProps => {
      return { open: !prevProps.open };
    });
  };

  render() {
    return (
      <DashboardGrid>
        <DashboardMain>
          {this.routes.map(route => (
            <Route
              key={route.name}
              component={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))}
        </DashboardMain>
        <DashboardSidebar isOpen={this.state.open}>
          <DashboardSidebar.SidebarLogo onClick={this.handleClick} />
          {this.routes.map(route => (
            <DashboardSidebar.SidebarLink
              key={route.name}
              text={route.name}
              exact={route.exact}
              to={route.path}
              icon={route.icon}
            />
          ))}
        </DashboardSidebar>
        <DashboardPlayer />
      </DashboardGrid>
    );
  }
}

export default Dashboard;
