import React, { useState } from 'react';

import styles from './SearchBar.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setQuery } from '../../store/reducers/searchSlice';

const SearchBar = () => {
  const query = useAppSelector((state) => state.searchReducer.query);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState(query);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setQuery(search));
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="search"
        value={search}
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
