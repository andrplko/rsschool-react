import { LoaderFunction } from 'react-router-dom';
import { fetchSingleRelease } from '../../services/apiService';
import { ReleaseItem } from '../../types';

export const detailsLoader: LoaderFunction = async ({ params: { id } }) => {
  if (!id) return;
  try {
    const data: ReleaseItem = await fetchSingleRelease(id);
    return data;
  } catch (error) {
    console.error(error);
    return { releaseData: null };
  }
};
