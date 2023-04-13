import { useEffect } from 'react';

import SearchBar from '../../widgets/searchBar/SearchBar';
import CardList from '../../widgets/cardList/CardList';
import Spinner from '../../widgets/spinner/Spinner';

import { Api } from './constants/unsplash';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setItemList } from '../../store/reducers/searchSlice';

const Home = () => {
  const { query, isLoading, isError } = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // setIsLoading(true);
    // setIsError(false);
    const resource =
      query === ''
        ? `${Api.URL}${Api.Random}${Api.ClientID}`
        : `${Api.URL}${Api.Search}${query}${Api.ClientID}`;
    fetch(resource)
      .then((response) => response.json())
      .then((data) => {
        query === '' ? dispatch(setItemList(data)) : dispatch(setItemList(data.results));
      });
    // .then(() => setIsLoading(false))
    // .catch(() => setIsError(true));
  }, [dispatch, query]);

  return (
    <main className="main">
      <SearchBar />
      {isLoading ? <Spinner /> : <CardList />}
      {isError && <p>Request limit exceeded, please try again in one hour.</p>}
    </main>
  );
};

export default Home;
