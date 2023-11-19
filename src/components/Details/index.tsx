import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/storeHooks';
import { useGetReleaseQuery } from '../../services/releasesApi';
import Loader from '../Loader';
import { setIsFetching, setRelease } from '../../store/slices/release';
import styles from './Details.module.scss';

const Details = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetReleaseQuery(id || '');

  useEffect(() => {
    dispatch(setIsFetching(isFetching));

    if (data && !isFetching) {
      dispatch(setRelease(data));
    }
  }, [data, isFetching]);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      {data && (
        <>
          <h2 className={styles.title}>
            {data.artists.map((artist) => artist.name).join(', ')}
          </h2>
          <h3 className={styles.title}>{data.title}</h3>
          <ul className={styles.tracklist}>
            {data.tracklist.map((track, index) => {
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
