import { Link, useLocation } from 'react-router-dom';
import { Release } from '../../types';
import ReleaseCard from '../ReleaseCard';
import { Routes } from '../../router/routes';
import { useAppContext } from '../../context';
import styles from './ReleasesList.module.scss';

const ReleasesList = () => {
  const { state } = useAppContext();
  const { releases } = state;
  const location = useLocation();
  const { search } = location;

  return (
    <div className={styles.container}>
      {releases?.map((release: Release) => (
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
      ))}
    </div>
  );
};

export default ReleasesList;
