import { Release } from 'types';
import ReleaseCard from '../ReleaseCard';
import styles from './ReleasesList.module.scss';

const ReleasesList = ({ results }: { results: Release[] }) => {
  return (
    <div className={styles.container}>
      {results
        ? results.map((release: Release) => (
            <ReleaseCard key={release.id} release={release} />
          ))
        : 'No results'}
    </div>
  );
};

export default ReleasesList;
