import { useRouter } from 'next/router';
import { wrapper } from 'lib/store';
import {
  getRelease,
  getReleases,
  getRunningQueriesThunk,
} from 'lib/releasesApi';
import ReleasesList from 'components/ReleasesList';
import { PaginationData, Release, ReleaseResponse } from '@/types';
import Pagination from 'components/Pagination';
import Dropdown from 'components/Dropdown';
import Wrapper from 'components/Wrapper';
import Details from 'components/Details';
import CloseButton from 'components/CloseButton';
import EmptyState from 'components/EmptyState';
import removeQueryParams from 'utils/removeQueryParams';
import transformQueryParams from 'utils/transformQueryParams';
import { DEFAULT_CURRENT_PAGE, DEFAULT_PER_PAGE } from '../constants/index';
import styles from '../styles/Home.module.scss';

interface HomeProps {
  release: ReleaseResponse | null;
  releases: { results: Release[]; pagination: PaginationData } | null;
}

const Home = ({ release, releases }: HomeProps) => {
  const router = useRouter();
  const { id } = router.query;

  if (!releases) return;
  const { results, pagination } = releases;

  const handleLeftSectionClick = () => {
    if (id) {
      removeQueryParams(router, 'id');
    }
  };

  return (
    <main className={styles.main}>
      <Wrapper>
        <div className={styles.container}>
          <section
            onClick={handleLeftSectionClick}
            className={styles.leftSection}
            data-testid="left-section"
          >
            <Dropdown perPage={pagination.per_page} />
            <div className={styles.wrapper}>
              {results.length ? (
                <ReleasesList results={results} />
              ) : (
                <EmptyState />
              )}
              <Pagination pagination={pagination} />
            </div>
          </section>
          {id && (
            <section
              className={styles.rightSection}
              data-testid="right-section"
            >
              <CloseButton />
              <Details release={release} />
            </section>
          )}
        </div>
      </Wrapper>
    </main>
  );
};

export default Home;

// eslint-disable-next-line react-refresh/only-export-components
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { query } = context;
    const { q, page, per_page, id } = transformQueryParams(query);

    const [releaseRes, releasesRes] = await Promise.all([
      id ? store.dispatch(getRelease.initiate(id)) : null,
      store.dispatch(
        getReleases.initiate({
          searchTerm: q || '',
          currentPage: page || DEFAULT_CURRENT_PAGE,
          perPage: per_page || DEFAULT_PER_PAGE,
        })
      ),
    ]);
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    const [release, releases] = [releaseRes?.data, releasesRes.data];

    return {
      props: {
        release: release || null,
        releases: releases || null,
      },
    };
  }
);
