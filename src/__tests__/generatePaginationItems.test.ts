import { generatePaginationItems } from '@/utils/generatePaginationItems';

describe('generatePaginationItems', () => {
  it('should return [1] for totalPages=1 and currentPage=1', () => {
    const totalPages = 1;
    const currentPage = 1;
    const result = generatePaginationItems(currentPage, totalPages);
    expect(result).toEqual([1]);
  });

  it('should return an array with all pages when totalPages is 3 or less', () => {
    const totalPages = 3;
    const currentPage = 2;
    const result = generatePaginationItems(currentPage, totalPages);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should include page 3 when currentPage is 1', () => {
    const totalPages = 10;
    const currentPage = 1;
    const result = generatePaginationItems(currentPage, totalPages);
    expect(result).toEqual([1, 2, 3, '...', 10]);
  });

  it('should include page 8 when currentPage is 10', () => {
    const totalPages = 10;
    const currentPage = 10;
    const result = generatePaginationItems(currentPage, totalPages);
    expect(result).toEqual([1, '...', 8, 9, 10]);
  });

  it('should include ellipsis on both sides when currentPage is in the middle', () => {
    const totalPages = 10;
    const currentPage = 5;
    const result = generatePaginationItems(currentPage, totalPages);
    expect(result).toEqual([1, '...', 4, 5, 6, '...', 10]);
  });
});
