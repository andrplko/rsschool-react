import { http, HttpResponse, delay } from 'msw';
import { PaginationData, Release } from '../types';

const FAKE_RELEASE_DATA = {
  artists: [{ name: 'Artist 1' }],
  title: 'Album Title',
  tracklist: [
    { title: 'Track 1', duration: '3:30' },
    { title: 'Track 2', duration: '4:15' },
  ],
};

const mockPaginationData: PaginationData = {
  page: 1,
  per_page: 6,
  pages: 6,
  items: 36,
};

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

export const handlers = [
  http.get('https://api.discogs.com/releases/1', async () => {
    await delay(200);
    return HttpResponse.json(FAKE_RELEASE_DATA, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.get('https://api.discogs.com/database/search', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        results: mockReleases,
        pagination: mockPaginationData,
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }),
];
