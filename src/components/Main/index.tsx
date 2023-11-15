import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import Loader from '../Loader';
import ReleasesList from '../ReleasesList';
import Pagination from '../Pagination';
import Dropdown from '../Dropdown';
import CloseButton from '../CloseButton';
import { Routes } from '../../router/routes';
import { useAppContext } from '../../context';
import styles from './Main.module.scss';
import EmptyState from '../EmptyState';

const Main = () => {
  const { state } = useAppContext();
  const { isLoading, releases } = state;
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

  if (!(isLoading || releases.length)) {
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
            {isLoading ? (
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
