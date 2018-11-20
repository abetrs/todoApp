import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <h2>Todo List App in React and ExpressJS</h2>
            <Navbar />
            <Routes />
          </header>      
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
