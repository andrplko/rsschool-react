import { http, HttpResponse, delay } from 'msw';
import {
  mockPaginationData,
  mockRelease,
  mockTransformedReleases,
} from './mockData';

export const handlers = [
  http.get('https://api.discogs.com/releases/8100827', async () => {
    await delay(200);
    return HttpResponse.json(mockRelease, {
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
        results: mockTransformedReleases,
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
