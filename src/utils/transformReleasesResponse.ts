import { Release, ReleasesResponse } from '@/types';

const transformReleasesResponse = (response: ReleasesResponse) => {
  const pagination = response.pagination;
  const results = response.results.reduce((acc: Release[], cur) => {
    acc.push({
      id: cur.id,
      title: cur.title,
      cover_image: cur.cover_image,
      year: cur.year,
      style: cur.style,
      genre: cur.genre,
    });
    return acc;
  }, []);

  return { results, pagination };
};

export default transformReleasesResponse;
