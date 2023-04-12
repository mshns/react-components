import styles from './SearchBar.module.scss';

const SearchBar = () => {
  // const searchValueStorage = localStorage.getItem('searchInputValue');
  // const [searchValue, setSearchValue] = useState(searchValueStorage ?? '');

  // useEffect(() => {
  //   localStorage.setItem('searchInputValue', searchValue);
  // }, [searchValue]);

  // const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   setSearchValue(event.currentTarget.value);
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setQuery(searchValue);
  //   localStorage.setItem('searchInputValue', searchValue);
  // };

  return (
    <form className={styles.search}>
      <input type="search" className={styles.search_input} placeholder="Enter a search term..." />

      <button type="submit" className={styles.search_button}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
