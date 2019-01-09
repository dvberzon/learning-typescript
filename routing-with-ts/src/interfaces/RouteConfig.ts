import { Component, FunctionComponent, ComponentClass } from "react";

/* Interface defining properties for a route config */

// I know we prefer to put exports at the bottom of the file, but for some reason with typescript
// inline exports are the only way to export an interface when the tsconfig.json has --isolatedModules set to true
export interface RouteConfig {
  name: string,
  path: string,
  // for internal routes, component prop can be a component class or functional component
  component?: ComponentClass | FunctionComponent,
  // optional external url string
  externalUrl?: string,
  // optional boolean for exact match
  exact?: boolean,
}