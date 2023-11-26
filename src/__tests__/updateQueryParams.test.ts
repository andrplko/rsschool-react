import updateQueryParams from '@/utils/updateQueryParams';
import { mockRouter } from '../../jest.setup';

describe('testing updateQueryParams function', () => {
  it('should update query parameters correctly', () => {
    updateQueryParams(mockRouter, { param2: 'value2' });

    expect(mockRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockRouter.replace).toHaveBeenCalledWith({
      pathname: '/',
      search: 'param2=value2',
    });
  });
});
