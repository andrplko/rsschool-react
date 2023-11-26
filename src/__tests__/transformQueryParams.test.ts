import transformQueryParams from '@/utils/transformQueryParams';
import { ParsedUrlQuery } from 'querystring';

describe('transformQueryParams', () => {
  test('transforms ParsedUrlQuery to QueryParams', () => {
    const query: ParsedUrlQuery = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    };

    const result = transformQueryParams(query);

    expect(result).toEqual({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    });
  });

  test('handles empty query', () => {
    const query: ParsedUrlQuery = {};

    const result = transformQueryParams(query);

    expect(result).toEqual({});
  });
});
