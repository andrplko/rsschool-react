import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createQuery } from '../helpers/createQuery';
import { ReleaseItem, ReleasesResponse } from '../types';

interface ReleasesQueryParams {
  searchTerm: string;
  currentPage: number;
  perPage: number;
}

export const releasesApi = createApi({
  reducerPath: 'releasesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.discogs.com',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getReleases: builder.query<ReleasesResponse, ReleasesQueryParams>({
      query: (arg) => {
        const { searchTerm, currentPage, perPage } = arg;
        const queryParams = createQuery(searchTerm, currentPage, perPage);
        return `/database/search?${queryParams}`;
      },
    }),
    getRelease: builder.query<ReleaseItem, string>({
      query: (id) => `/releases/${id}`,
    }),
  }),
});

export const { useGetReleaseQuery, useGetReleasesQuery } = releasesApi;
