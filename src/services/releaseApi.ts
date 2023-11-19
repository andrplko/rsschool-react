import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ReleaseItem } from '../types';

export const releaseApi = createApi({
  reducerPath: 'releaseApi',
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.discogs.com/releases/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRelease: builder.query<ReleaseItem, string>({
      query: (id) => id,
    }),
  }),
});

export const { useGetReleaseQuery } = releaseApi;
