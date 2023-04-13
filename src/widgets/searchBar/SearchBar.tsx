import React from 'react';

import styles from './SearchBar.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setQuery } from '../../store/reducers/searchSlice';

const SearchBar = () => {
  const { query } = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.currentTarget.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setQuery(event.currentTarget.value));
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        className={styles.search_input}
        placeholder="Enter a search term..."
      />

      <button type="submit" className={styles.search_button}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
