import React, { Component } from 'react';
import './App.css';
import Header from '../header/header';
import Menu from '../menu/menu';
import Chart from '../chart/chart';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Chart />
      </div>
    );
  }
}

export default App;
