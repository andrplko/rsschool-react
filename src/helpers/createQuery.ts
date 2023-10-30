export const createQuery = (searchTerm: string) => {
  const trimmedSearchTerm = searchTerm.trim();
  return trimmedSearchTerm ? `name=${trimmedSearchTerm}&page=1` : 'page=1';
};
