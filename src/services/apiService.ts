import { createQuery } from '../helpers/createQuery';
import { ApiCharactersData } from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export const fetchCharacters = async (searchTerm: string) => {
  const query = createQuery(searchTerm);
  const url = `${BASE_URL}?${query}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data: ApiCharactersData = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
