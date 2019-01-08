import React, { FunctionComponent} from 'react';

interface link {
  name: string,
  url: string
}

const links: link[] = [
  { "name": "BBC", "url": "http://www.bbc.co.uk" },
  { "name": "Guardian", "url": "http://www.guardian.com" },
  { "name": "Google", "url": "http://www.google.com" },
];


const SideMenu: FunctionComponent<{}> = () => (
  <nav className="sidebar">
    <ul className="links">
      {links.map(({ name, url }) => (
        <li>
          <a href={url}>{name}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export { SideMenu }