import { waitFor } from '@testing-library/react';
import { fetchSingleRelease } from '../services/apiService';

const mockReleaseData = {
  artists: [{ name: 'Artist 1' }],
  title: 'Album Title',
  tracklist: [
    { title: 'Track 1', duration: '3:30' },
    { title: 'Track 2', duration: '4:15' },
  ],
};

describe('fetchSingleRelease', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch single release successfully', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => mockReleaseData,
      })
    ) as jest.Mock;

    const data = await fetchSingleRelease('1');

    expect(data).toEqual(mockReleaseData);
    expect(fetch).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(expect.stringContaining(`1`), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
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

    await waitFor(async () => {
      await expect(fetchSingleRelease('1')).rejects.toThrow(
        'HTTP error! Status: 404'
      );
      consoleErrorSpy.mockRestore();
    });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });
});
