import React, { Component } from 'react';

import Logo from './logo';
import RecentPosts from './recent-posts';
import SearchBar from './searchbar';

export default class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.history.push('/results');
  }

  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}
