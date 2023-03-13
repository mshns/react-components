import React from 'react';

import './SearchBar.scss';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="search">
        <input type="search" className="search_input" placeholder="Search..." />
        <button type="submit" className="search_button">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
