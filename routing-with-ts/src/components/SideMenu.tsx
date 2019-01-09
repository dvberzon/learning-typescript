import React, { FunctionComponent} from 'react';
import { Router, Link } from "react-router-dom";
import { routes } from '../routes'

const SideMenu: FunctionComponent<{}> = () => (
  <nav className="sidebar">
    <ul className="links">
      { routes.map(({ path, name }) => (
        <li key={path}>
          <Link to={path}>{name}</Link>
        </li>
      )) }
    </ul>
  </nav>
)

export { SideMenu }