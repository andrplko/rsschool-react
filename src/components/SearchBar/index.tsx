import { Component, ChangeEvent, FormEvent } from 'react';
import { ISearchTermProps } from '../../types';
import { LOCAL_STORAGE_SEARCH_TERM } from '../../constants';
import styles from './SearchBar.module.scss';

class SearchBar extends Component<ISearchTermProps> {
  state = {
    searchTerm: localStorage.getItem(LOCAL_STORAGE_SEARCH_TERM) || '',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    localStorage.setItem(LOCAL_STORAGE_SEARCH_TERM, searchTerm);
    this.setState({ searchTerm });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.setSearchTerm(this.state.searchTerm);
  };

  public render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            placeholder="Search"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
