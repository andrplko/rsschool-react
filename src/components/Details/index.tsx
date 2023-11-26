import { ReleaseResponse } from 'types';
import styles from './Details.module.scss';

const Details = ({ release }: { release: ReleaseResponse | null }) => {
  return (
    <div className={styles.container}>
      {release && (
        <>
          <h2 className={styles.title}>
            {release.artists.map((artist) => artist.name).join(', ')}
          </h2>
          <h3 className={styles.title}>{release.title}</h3>
          <ul className={styles.tracklist}>
            {release.tracklist.map((track, index) => {
              return (
                <li key={index} className={styles.track}>
                  <span>{`${index + 1}. ${track.title}`}</span>
                  <span>{track.duration}</span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Details;
