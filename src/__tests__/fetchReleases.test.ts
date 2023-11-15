import { waitFor } from '@testing-library/react';
import { fetchReleases } from '../services/apiService';
import { Release } from '../types';
import { createQuery } from '../helpers/createQuery';

const { VITE_BASE_URL } = process.env;

const mockReleases: Release[] = [
  {
    id: 1,
    title: 'Mac Demarco 1',
    cover_image: 'release.jpg',
    year: '1995',
    style: ['Indie-Rock', 'Lo-fi'],
    genre: ['Rock'],
  },
  {
    id: 2,
    title: 'Mac Demarco 2',
    cover_image: 'release.jpg',
    year: '1998',
    style: ['Indie-Rock'],
    genre: ['Rock'],
  },
];

describe('fetchReleases', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch releases successfully', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => ({
          results: mockReleases,
        }),
      })
    ) as jest.Mock;

    const data = await fetchReleases('search', 1, 1);

    expect(data.results).toEqual(mockReleases);
    expect(fetch).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        `${VITE_BASE_URL}?${createQuery('search', 1, 1)}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    });
  });

  it('should handle fetch errors', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        json: async () => ({}),
      })
    ) as jest.Mock;

    const consoleErrorSpy = jest.spyOn(console, 'error');
    consoleErrorSpy.mockImplementation(() => {});

    await waitFor(() => {
      expect(fetchReleases('search', 1, 1)).rejects.toThrow(
        'HTTP error! Status: 404'
      );
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    consoleErrorSpy.mockRestore();
  });
});
