import { createQuery } from '../helpers/createQuery';
import { ReleaseItem, ReleasesResponse } from '../types';

const { VITE_BASE_URL, VITE_RELEASES_URL } = process.env;

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchReleases = async (
  searchTerm: string,
  currentPage: number,
  perPage: number
) => {
  try {
    const queryParams = createQuery(searchTerm, currentPage, perPage);

    const response = await fetch(`${VITE_BASE_URL}?${queryParams}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ReleasesResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchSingleRelease = async (id: string) => {
  try {
    const response = await fetch(`${VITE_RELEASES_URL}${id}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ReleaseItem = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
