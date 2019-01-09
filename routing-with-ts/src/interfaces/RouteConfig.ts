import { Component, FunctionComponent, ComponentClass } from "react";

// I know we prefer to put exports at the bottom of the file, but for some reason with typescript
// inline exports are the only way to export an interface when the tsconfig.json has --isolatedModules set to true
export interface RouteConfig {
  name: string,
  path: string,
  // route component can be a component class or functional component
  component: ComponentClass | FunctionComponent,
  // optional boolean for exact match
  exact?: boolean,
}