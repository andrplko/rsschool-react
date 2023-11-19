import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createQuery } from '../helpers/createQuery';
import { ReleasesResponse } from '../types';

interface QueryParams {
  searchTerm: string;
  currentPage: number;
  perPage: number;
}

export const releasesApi = createApi({
  reducerPath: 'releasesApi',
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.discogs.com/database/search',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getReleases: builder.query<ReleasesResponse, QueryParams>({
      query: (arg) => {
        const { searchTerm, currentPage, perPage } = arg;
        const queryParams = createQuery(searchTerm, currentPage, perPage);
        return `?${queryParams}`;
      },
    }),
  }),
});

export const { useGetReleasesQuery } = releasesApi;
