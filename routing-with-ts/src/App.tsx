import React, { Component } from 'react';
import { PageHeader } from './components/PageHeader';
import { SideMenu } from './components/SideMenu';
import { MainArea } from './components/MainArea';
import { Footer } from './components/Footer';
import { BrowserRouter } from "react-router-dom";

import './App.css';


class App extends Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <PageHeader />
          <section id="body-section">
            <SideMenu />
            <MainArea />
          </section>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
