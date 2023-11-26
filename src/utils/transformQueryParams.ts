import { ParsedUrlQuery, stringify } from 'querystring';

interface QueryParams {
  [key: string]: string;
}

const transformQueryParams = (query: ParsedUrlQuery) => {
  const params = new URLSearchParams(stringify(query));

  return Array.from(params.entries()).reduce(
    (acc: QueryParams, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {}
  );
};

export default transformQueryParams;
