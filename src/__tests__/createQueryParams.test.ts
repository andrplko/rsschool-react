import { createQueryParams } from '../utils/createQueryParams';

describe('createQuery', () => {
  it('should return a URLSearchParams object with the correct parameters', () => {
    const searchTerm = 'example';
    const currentPage = '1';
    const perPage = '10';

    const result = createQueryParams(searchTerm, currentPage, perPage);

    expect(result).toBeInstanceOf(URLSearchParams);

    expect(result.get('q')).toBe(searchTerm.trim());
    expect(result.get('type')).toBe('release');
    expect(result.get('page')).toBe(String(currentPage));
    expect(result.get('per_page')).toBe(String(perPage));
  });
});
