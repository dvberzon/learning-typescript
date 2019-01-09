import React, { FunctionComponent} from 'react';
import { NavLink } from "react-router-dom";
import { routes } from '../routes'

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