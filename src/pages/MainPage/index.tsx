import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Main from '../../components/Main';
import { useGetReleasesQuery } from '../../services/releasesApi';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { setIsFetching, setReleases } from '../../store/slices/releases';
import { DEFAULT_CURRENT_PAGE, DEFAULT_PER_PAGE } from '../../constants';
import { setPaginationData } from '../../store/slices/pagination';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { searchTerm } = useAppSelector((state) => state.search);

  const currentPage = searchParams.get('page');
  const perPage = searchParams.get('per_page');

  const { data, isFetching } = useGetReleasesQuery({
    searchTerm: searchTerm || '',
    currentPage: currentPage ? +currentPage : DEFAULT_CURRENT_PAGE,
    perPage: perPage ? +perPage : DEFAULT_PER_PAGE,
  });

  useEffect(() => {
    dispatch(setIsFetching(isFetching));

    if (data && !isFetching) {
      dispatch(setReleases(data.results));
      dispatch(setPaginationData(data.pagination));
    }
  }, [data, isFetching]);

  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
};

export default MainPage;
