import React, { useEffect, useRef, useState } from 'react';

import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const searchValueStorage = localStorage.getItem('searchInputValue');
  const [searchValue, setSearchValue] = useState(searchValueStorage ?? '');
  const searchValueRef = useRef('');

  useEffect(() => {
    searchValueRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchInputValue', searchValueRef.current);
    };
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="search"
        value={searchValue}
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
