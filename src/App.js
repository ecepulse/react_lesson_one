import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PulseNav from './components/Navbar.js';

class App extends Component {
  render() {
    return (
        <div>
        <PulseNav
            links={[
                {
                    href: "/about",
                    title: "About"
                },
                {
                    href: "/getting-started",
                    title: "Getting Started"
                },
                {
                    href: "/contact-us",
                    title: "Contact Us"
                },
                {
                    href: "/test",
                    title: "Test Link"
                }
            ]}
        />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
        </div>
    );
  }
}

export default App;
