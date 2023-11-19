import {
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  // useSearchParams,
} from 'react-router-dom';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import Loader from '../Loader';
import ReleasesList from '../ReleasesList';
import Pagination from '../Pagination';
import Dropdown from '../Dropdown';
import CloseButton from '../CloseButton';
import { Routes } from '../../router/routes';
import EmptyState from '../EmptyState';
import { useAppSelector } from '../../hooks/storeHooks';
import styles from './Main.module.scss';

const Main = () => {
  const { results, isFetching } = useAppSelector((state) => state.releases);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;

  const handleLeftSectionClick = () => {
    if (id) {
      navigate(`${Routes.index}${search}`);
    }
  };

  const rightSectionClasses = classNames(styles.rightSection, {
    [styles.hidden]: !id,
  });

  if (!(isFetching || results.length)) {
    return <EmptyState />;
  }

  return (
    <main className={styles.main}>
      <Wrapper>
        <div className={styles.container}>
          <section
            onClick={handleLeftSectionClick}
            className={styles.leftSection}
          >
            <Dropdown />
            {isFetching ? (
              <Loader />
            ) : (
              <div className={styles.wrapper}>
                <ReleasesList />
                <Pagination />
              </div>
            )}
          </section>
          <section className={rightSectionClasses}>
            <CloseButton />
            <Outlet />
          </section>
        </div>
      </Wrapper>
    </main>
  );
};

export default Main;
