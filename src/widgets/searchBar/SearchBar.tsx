import React from 'react';

import styles from './SearchBar.module.scss';

import { ISearchState } from './types/interfaces';

class SearchBar extends React.Component<unknown, ISearchState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      searchInputValue: localStorage.getItem('searchInputValue') ?? '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentWillUnmount() {
    localStorage.setItem('searchInputValue', this.state.searchInputValue);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  handleChangeInput(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ searchInputValue: event.currentTarget.value });
  }

  render() {
    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <input
          type="search"
          className={styles.search_input}
          placeholder="Enter a search term..."
          value={this.state.searchInputValue}
          onChange={this.handleChangeInput}
        />

        <button type="submit" className={styles.search_button}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
