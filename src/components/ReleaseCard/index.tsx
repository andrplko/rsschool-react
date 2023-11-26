import { useRouter } from 'next/router';
import updateQueryParams from 'utils/updateQueryParams';
import Image from 'next/image';
import { Release } from 'types';
import styles from './ReleaseCard.module.scss';

const ReleaseCard = ({ release }: { release: Release }) => {
  const router = useRouter();
  const routerId = router.query.id;

  const handleCLick = (id: number) => {
    if (!routerId) {
      updateQueryParams(router, { id: String(id) });
    }
  };

  return (
    <div
      className={styles.container}
      onClick={() => handleCLick(release.id)}
      data-testid="card"
    >
      <div className={styles.wrapper}>
        <Image
          src={release.cover_image}
          width={200}
          height={200}
          alt={release.title}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{release.title}</h3>
        <div className={styles.description}>
          <p className={styles.text}>Year: {release.year}</p>
          <p className={styles.text}>Genres: {release.genre.join(', ')}</p>
          <p className={styles.text}>Style: {release.style.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default ReleaseCard;
