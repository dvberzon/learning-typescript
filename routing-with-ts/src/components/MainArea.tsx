import React, { FunctionComponent } from 'react';
import { routes } from '../routes';
import { Route } from 'react-router-dom';
import { ExternalPage } from './ExternalPage';

/* Main content area of the app */
// Uses <Route> components to render the correct component for the history routes
// The routes themselves are defined in `route.ts` in the project directory
const MainArea: FunctionComponent<{}> = () => (
  <main>
    { 
      routes.map(({path, component, exact, externalUrl}) => {
        // properties for the Route component for both internal and external routes
        const routeProps = {
          path,
          exact,
          key: path
        }
        // if there is an external url, we need to set a render prop rather
        // than a component prop, as this allows us to pass the 'src' property to the ExternalPage component
        // see https://tylermcginnis.com/react-router-pass-props-to-components/
        if(externalUrl){
          return <Route
            render={() => <ExternalPage src={externalUrl} />}
            { ...routeProps }
          />
        }
        // otherwise just use a normal route
        return <Route
          component={component}
          { ...routeProps}
        />
      })
    }
  </main>
)

export { MainArea }