import { FormEvent } from 'react';
import { useRouter } from 'next/router';
import { SearchFormElement } from './types';
import updateQueryParams from 'utils/updateQueryParams';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<SearchFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { value } = form.elements.search;
    updateQueryParams(router, { q: value.trim(), page: '1' });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="search" />
        <input
          id="search"
          name="search"
          type="text"
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
