import styles from './EmptyState.module.scss';

const EmptyState = () => {
  return (
    <div className={styles.container}>
      <h1>No results</h1>
    </div>
  );
};

export default EmptyState;
