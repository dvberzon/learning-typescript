import React, { FunctionComponent} from 'react';
import { NavLink } from "react-router-dom";
import { routes } from '../routes'

/* Side navigation menu */
// Uses ReactRouter.NavLink to create navigation links to routes in the system
// The routes themselves are defined in routes.ts in the project root
// Active routes will get the 'active' css class added to the link
const SideMenu: FunctionComponent<{}> = () => (
  <nav className="sidebar">
    <ul className="links">
      { routes.map(({ path, name }) => (
        <li key={path}>
          <NavLink to={path} activeClassName="active" exact>{name}</NavLink>
        </li>
      )) }
    </ul>
  </nav>
)

export { SideMenu }