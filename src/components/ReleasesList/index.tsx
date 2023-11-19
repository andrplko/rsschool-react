import { Link, useLocation } from 'react-router-dom';
import { Release } from '../../types';
import ReleaseCard from '../ReleaseCard';
import { Routes } from '../../router/routes';
import { useAppSelector } from '../../hooks/storeHooks';
import styles from './ReleasesList.module.scss';

const ReleasesList = () => {
  const { results } = useAppSelector((state) => state.releases);
  const location = useLocation();
  const { search } = location;

  return (
    <div className={styles.container}>
      {results
        ? results.map((release: Release) => (
            <Link
              key={release.id}
              to={{
                pathname: `${Routes.release}/${release.id}`,
                search,
              }}
              className={styles.link}
            >
              <ReleaseCard release={release} />
            </Link>
          ))
        : 'No results'}
    </div>
  );
};

export default ReleasesList;
