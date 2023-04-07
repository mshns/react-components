import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './SearchBar.module.scss';

import { ISearchBar } from './types/interfaces';

const SearchBar = ({ setQuery }: ISearchBar) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onSubmit' });

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

  const onSubmit = handleSubmit((data) => {
    setQuery(data.search);
    localStorage.setItem('searchInputValue', data.search);
  });

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input
        {...register('search', {
          required: 'Please enter a search term',
        })}
        type="search"
        className={styles.search_input}
        placeholder="Enter a search term..."
      />

      {errors?.search && <p className={styles.search_error}>{errors.search.message?.toString()}</p>}

      <button type="submit" className={styles.search_button}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
