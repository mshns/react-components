import { useEffect, useState } from 'react';

import SearchBar from '../../widgets/searchBar/SearchBar';
import CardList from '../../widgets/cardList/CardList';
import Spinner from '../../widgets/spinner/Spinner';

import { Api } from './constants/unsplash';

const Home = () => {
  const [itemList, setItemList] = useState([]);
  const searchValueStorage = localStorage.getItem('searchInputValue');
  const [query, setQuery] = useState(searchValueStorage ?? '');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const resource =
      query === ''
        ? `${Api.URL}${Api.Random}${Api.ClientID}`
        : `${Api.URL}${Api.Search}${query}${Api.ClientID}`;
    fetch(resource)
      .then((response) => response.json())
      .then((data) => {
        query === '' ? setItemList(data) : setItemList(data.results);
      })
      .then(() => setIsLoading(false))
      .catch(() => setIsError(true));
  }, [query]);

  return (
    <main className="main">
      <SearchBar setQuery={setQuery} />
      {isLoading ? <Spinner /> : <CardList itemList={itemList} />}
      {isError && <p>Request limit exceeded, please try again in one hour.</p>}
    </main>
  );
};

export default Home;
