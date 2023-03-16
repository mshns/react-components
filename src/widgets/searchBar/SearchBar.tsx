import React from 'react';

import './SearchBar.scss';

class SearchBar extends React.Component {
  state = {
    searchInputValue: localStorage.getItem('searchInputValue') ?? '',
  };

  componentWillUnmount() {
    localStorage.setItem('searchInputValue', this.state.searchInputValue);
  }

  render() {
    return (
      <form className="search" onSubmit={(event) => event.preventDefault()}>
        <input
          type="search"
          className="search_input"
          placeholder="Search..."
          value={this.state.searchInputValue}
          onChange={(event) => this.setState({ searchInputValue: event.target.value })}
        />
        <button type="submit" className="search_button">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
