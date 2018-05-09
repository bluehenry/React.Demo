import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../header/header';
import Menu from '../menu/menu';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
