import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Main from '../../components/Main';
import { fetchReleases } from '../../services/apiService';
import { useAppContext } from '../../context';
import {
  setIsLoading,
  setCurrentPage,
  setPerPage,
  setTotalPages,
  setReleases,
} from '../../context/actions';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const [, setSearchParams] = useSearchParams();
  const { state, dispatch } = useAppContext();
  const { searchTerm, currentPage, perPage } = state;

  const getReleases = async () => {
    setIsLoading(dispatch, true);

    try {
      const { results, pagination } = await fetchReleases(
        searchTerm,
        currentPage,
        perPage
      );

      setReleases(dispatch, results || []);
      setCurrentPage(dispatch, pagination.page);
      setPerPage(dispatch, pagination.per_page);
      setTotalPages(dispatch, pagination.pages);

      setSearchParams({
        q: searchTerm,
        page: String(pagination.page),
        per_page: String(pagination.per_page),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(dispatch, false);
    }
  };

  useEffect(() => {
    getReleases();
  }, [searchTerm, currentPage, perPage]);

  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
};

export default MainPage;
