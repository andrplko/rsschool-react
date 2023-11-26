import classNames from 'classnames';
import { useRouter } from 'next/router';
import { generatePaginationItems } from 'utils/generatePaginationItems';
import updateQueryParams from 'utils/updateQueryParams';
import { PaginationData } from 'types';
import styles from './Pagination.module.scss';

const Pagination = ({ pagination }: { pagination: PaginationData }) => {
  const router = useRouter();
  const { page, pages } = pagination;

  const sequence = generatePaginationItems(page, pages);

  const handleNext = () => {
    updateQueryParams(router, { page: String(page + 1) });
  };

  const handlePrev = () => {
    if (page > 1) {
      updateQueryParams(router, { page: String(page - 1) });
    }
  };

  const handleClick = (currentPage: number | string) => {
    if (typeof currentPage === 'number') {
      updateQueryParams(router, { page: String(currentPage) });
    }
  };

  const getListItemClassName = (number: number | string) => {
    if (typeof number === 'number') {
      return classNames(styles.listItem, {
        [styles.active]: number === page,
      });
    }
  };

  const isPrevButtonDisabled = page === 1;
  const isNextButtonDisabled = page === pages;

  const prevButtonClassnames = classNames(styles.button, {
    [styles.disabled]: isPrevButtonDisabled,
  });

  const nextButtonClassnames = classNames(styles.button, {
    [styles.disabled]: isNextButtonDisabled,
  });

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <button
            type="button"
            onClick={handlePrev}
            className={prevButtonClassnames}
            disabled={isPrevButtonDisabled}
          >
            Prev
          </button>
        </li>
        {sequence.map((number, index) => {
          return (
            <li key={index} className={getListItemClassName(number)}>
              <button
                type="button"
                onClick={() => {
                  handleClick(number);
                }}
                className={styles.button}
              >
                {number}
              </button>
            </li>
          );
        })}
        <li className={styles.listItem}>
          <button
            type="button"
            onClick={handleNext}
            className={nextButtonClassnames}
            disabled={isNextButtonDisabled}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
