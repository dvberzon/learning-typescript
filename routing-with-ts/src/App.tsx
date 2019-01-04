import React, { Component } from 'react';
import { TopLevelComponent } from './components/TopLevelComponent';
import './App.css';

class App extends Component {
  render() {
    const bob: string = "Hello";
    const message: string = `${bob} is a react app, let's add ts`;
    return (
        <TopLevelComponent />
    );
  }
}

export default App;
