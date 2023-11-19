import { MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { generatePaginationItems } from '../../helpers/generatePaginationItems';
import { useAppSelector } from '../../hooks/storeHooks';
import styles from './Pagination.module.scss';

const Pagination = () => {
  const [, setSearchParams] = useSearchParams();
  const { page, per_page, pages } = useAppSelector((state) => state.pagination);
  const { isFetching } = useAppSelector((state) => state.releases);

  const sequence = generatePaginationItems(page, pages);

  const getSearchParams = (currentPage: number) => {
    return {
      page: String(currentPage),
      per_page: String(per_page),
    };
  };

  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSearchParams(getSearchParams(page + 1));
  };

  const handlePrev = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (page > 1) {
      setSearchParams(getSearchParams(page - 1));
    }
  };

  const handleClick = (
    event: MouseEvent<HTMLButtonElement>,
    page: number | string
  ) => {
    event.stopPropagation();
    if (typeof page === 'number') {
      setSearchParams(getSearchParams(page));
    }
  };

  const getListItemClassName = (number: number | string) => {
    if (typeof number === 'number') {
      return classNames(styles.listItem, {
        [styles.active]: number === page,
      });
    }
  };

  const isPrevButtonDisabled = page === 1 || isFetching;
  const isNextButtonDisabled = page === pages || isFetching;

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
                onClick={(event) => {
                  handleClick(event, number);
                }}
                className={styles.button}
                disabled={isFetching}
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
