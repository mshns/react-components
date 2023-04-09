import { useEffect, useState } from 'react';

import SearchBar from '../../widgets/searchBar/SearchBar';
import CardList from '../../widgets/cardList/CardList';

import { Api } from './constants/unsplash';

const Home = () => {
  const [itemList, setItemList] = useState([]);
  const searchValueStorage = localStorage.getItem('searchInputValue');
  const [query, setQuery] = useState(searchValueStorage ?? '');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const resource =
      query === ''
        ? `${Api.URL}${Api.Random}${Api.ClientID}`
        : `${Api.URL}${Api.Search}${query}${Api.ClientID}`;
    fetch(resource)
      .then((response) => response.json())
      .then((data) => {
        query === '' ? setItemList(data) : setItemList(data.results);
      })
      .then(() => setIsLoading(false));
  }, [query]);

  return (
    <main className="main">
      <SearchBar setQuery={setQuery} />
      {isLoading ? <p>Loading...</p> : <CardList itemList={itemList} />}
    </main>
  );
};

export default Home;
