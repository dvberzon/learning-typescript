import React, { FunctionComponent } from 'react';
import { routes } from '../routes';
import { Route } from 'react-router-dom';

const MainArea: FunctionComponent<{}> = () => (
  <main>
    { 
      routes.map(({path, component, exact}) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            component={component}
          />
        )
      )
    }
  </main>
)

export { MainArea }