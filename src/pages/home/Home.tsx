import { useEffect, useState } from 'react';

import SearchBar from '../../widgets/searchBar/SearchBar';
import CardList from '../../widgets/cardList/CardList';

import { apiURL, apiID } from './constants/unsplash';

const Home = () => {
  const [itemList, setItemList] = useState([]);
  const [query, setQuery] = useState('photo');

  useEffect(() => {
    const resource = apiURL + query + apiID;
    fetch(resource)
      .then((response) => response.json())
      .then((data) => setItemList(data.results));
  }, [query]);

  return (
    <main className="main">
      <SearchBar setQuery={setQuery} />
      <CardList itemList={itemList} />
    </main>
  );
};

export default Home;
