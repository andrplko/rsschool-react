export const createQueryParams = (
  searchTerm: string,
  currentPage: string,
  perPage: string
): URLSearchParams => {
  const queryParams = new URLSearchParams({
    q: searchTerm,
    type: 'release',
    page: currentPage,
    per_page: perPage,
    key: 'AyyuOYnNpDGwMNjfpPCb',
    secret: 'VZIzlQzsmldhOYpSFEVzJuscZDJjxAOq',
  });

  return queryParams;
};
