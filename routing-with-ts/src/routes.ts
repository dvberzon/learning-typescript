import { RouteConfig } from './interfaces/RouteConfig';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';

/* Array of route config data */
// Each entry in the array conforms to the RouteConfig interface defined in /interfaces/RouteConfig
// external routes (for display in an iframe) have an `exernalUrl` parameter instead of `component`
const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
    // the `exact` prop means that the route only matches '/' and not (for example) '/about'
    exact: true
  },
  {
    name: 'About',
    path: '/about',
    component: AboutPage
  },
  {
    name: 'Graduate',
    path: '/graduate',
    externalUrl: "/external/graduate.html"
  },
  {
    name: 'Client',
    path: '/client',
    externalUrl: "/external/client.html"
  },
  {
    name: 'Vacancy',
    path: '/vacancy',
    externalUrl: "/external/vacancy.html"
  },
];

export { routes }