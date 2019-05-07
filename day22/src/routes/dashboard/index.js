import { ReactComponent as HomeIcon } from 'assets/sidebar-home.svg';
import { ReactComponent as LibraryIcon } from 'assets/sidebar-library.svg';
import { ReactComponent as SearchIcon } from 'assets/sidebar-search.svg';
import Dashboard from './Dashboard';
import Home from './Home';
import Libraries from './Libraries';
import Search from './Search';

export default {
  path: '/dashboard',
  component: Dashboard,
  routes: [
    {
      path: `/dashboard/`,
      exact: true,
      component: Home,
      name: 'Home',
      icon: HomeIcon
    },
    {
      path: `/dashboard/search`,
      component: Search,
      name: 'Search',
      icon: SearchIcon
    },
    {
      path: `/dashboard/libraries`,
      component: Libraries,
      name: 'Your Libraries',
      icon: LibraryIcon
    }
  ]
};
