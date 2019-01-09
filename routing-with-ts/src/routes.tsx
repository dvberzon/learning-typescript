import { RouteConfig } from './interfaces/RouteConfig';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ExternalPage } from './components/ExternalPage';
import React, { FunctionComponent } from 'react';

// define some hardcoded components for the external pages, where each is passed the external url as a prop
const GraduatePage: FunctionComponent = () => (
  <ExternalPage src="/external/graduate.html" />
)

const ClientPage: FunctionComponent = () => (
  <ExternalPage src="/external/client.html" />
)

const VacancyPage: FunctionComponent = () => (
  <ExternalPage src="/external/vacancy.html" />
)

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
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
    component: GraduatePage
  },
  {
    name: 'Client',
    path: '/client',
    component: ClientPage
  },
  {
    name: 'Vacancy',
    path: '/vacancy',
    component: VacancyPage
  },
];

export { routes }