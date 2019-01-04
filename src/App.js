import React, { Component } from 'react';

import Main from './components/statics/Main';
import Footer from './components/statics/Footer';
import Layout from './hoc/layout/Layout';

import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="AppMain">
          <Main />
        </Layout>

        <footer className="AppFooter">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
