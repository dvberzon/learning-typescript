import React from 'react';
import UserComponent from './UserComponent';

const TopLevelComponent = () => (
  <React.Fragment>
    <p>Hello there, this is a react app</p>
    <UserComponent
      name="bob"
      age={49}
      address="My last known address"
      dob={new Date()}
    />
  </React.Fragment>
)

export { TopLevelComponent }