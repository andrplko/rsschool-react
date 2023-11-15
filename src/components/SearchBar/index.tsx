import { ChangeEvent, FormEvent, useState } from 'react';
import { LOCAL_STORAGE_SEARCH_TERM } from '../../constants';
import { useAppContext } from '../../context';
import { setSearchTerm } from '../../context/actions';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const { dispatch } = useAppContext();
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem(LOCAL_STORAGE_SEARCH_TERM) || ''
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(dispatch, searchValue);
    localStorage.setItem(LOCAL_STORAGE_SEARCH_TERM, searchValue);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
