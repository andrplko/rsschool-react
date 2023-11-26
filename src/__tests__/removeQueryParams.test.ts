import removeQueryParams from '@/utils/removeQueryParams';
import { mockRouter } from '../../jest.setup';

describe('testing removeQueryParams function', () => {
  it('should remove query parameters correctly', () => {
    removeQueryParams(mockRouter, 'param2');

    expect(mockRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockRouter.replace).toHaveBeenCalledWith({
      pathname: '/',
      search: '',
    });
  });
});
