import React, { FunctionComponent} from 'react';

/* Simple page header */
const PageHeader: FunctionComponent<{}> = () => (
  <header>
    <span className="username">Logged in as <strong>Daniel</strong></span>
  </header>
)

export { PageHeader }