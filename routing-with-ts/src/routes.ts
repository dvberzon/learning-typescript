import { RouteConfig } from './interfaces/RouteConfig';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/home',
    component: HomePage
  },
  {
    name: 'About',
    path: '/about',
    component: AboutPage
  },
];

export { routes }