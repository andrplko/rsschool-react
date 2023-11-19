import { ChangeEvent, FormEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setSearchTerm } from '../../store/slices/search';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { DEFAULT_CURRENT_PAGE } from '../../constants';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [, setSearchParams] = useSearchParams();
  const { per_page } = useAppSelector((state) => state.pagination);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchValue));
    setSearchParams({
      page: String(DEFAULT_CURRENT_PAGE),
      per_page: String(per_page),
    });
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
