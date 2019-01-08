import React, { Component } from 'react';
import { PageHeader } from './components/PageHeader';
import { SideMenu } from './components/SideMenu';
import { MainArea } from './components/MainArea';
import { Footer } from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader />
        <section id="body-section">
          <SideMenu />
          <MainArea />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
