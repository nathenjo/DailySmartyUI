import React, { Component } from 'react';

import Logo from './logo';
import RecentPosts from './recent-posts';
import SearchBar from './searchbar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar />
        <RecentPosts />
      </div>
    );
  }
}
