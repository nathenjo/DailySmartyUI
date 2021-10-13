import React, { Component } from 'react';
import Logo from './logo';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DailySmarty</h1>
        <h2>React Redux Router</h2>
        <Logo />
      </div>
    );
  }
}
