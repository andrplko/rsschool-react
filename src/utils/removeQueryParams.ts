import { NextRouter } from 'next/router';
import { stringify } from 'querystring';

const removeQueryParams = (router: NextRouter, param: string) => {
  const { pathname, query } = router;
  const params = new URLSearchParams(stringify(query));
  params.delete(param);

  router.replace({
    pathname,
    search: params.toString(),
  });
};

export default removeQueryParams;
