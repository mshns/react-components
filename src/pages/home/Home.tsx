import React from 'react';

import SearchBar from '../../widgets/searchBar/SearchBar';
import CardList from '../../widgets/cardList/CardList';

class About extends React.Component {
  render() {
    return (
      <main className="main">
        <SearchBar />
        <CardList />
      </main>
    );
  }
}

export default About;
