import { NextRouter } from 'next/router';
import transformQueryParams from './transformQueryParams';

interface QueryParams {
  [key: string]: string;
}

const updateQueryParams = (router: NextRouter, newQuery: QueryParams): void => {
  const { pathname, query } = router;
  const routerQuery = transformQueryParams(query);
  const queryParams = new URLSearchParams({
    ...routerQuery,
    ...newQuery,
  });

  router.replace({
    pathname,
    search: queryParams.toString(),
  });
};

export default updateQueryParams;
