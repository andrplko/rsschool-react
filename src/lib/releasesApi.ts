import transformReleasesResponse from '@/utils/transformReleasesResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import {
  PaginationData,
  Release,
  ReleaseResponse,
  ReleasesResponse,
} from 'types';
import { createQueryParams } from 'utils/createQueryParams';

interface ReleasesQueryParams {
  searchTerm: string;
  currentPage: string;
  perPage: string;
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
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Release', 'Releases'],
  endpoints: (builder) => ({
    getReleases: builder.query<
      { results: Release[]; pagination: PaginationData },
      ReleasesQueryParams
    >({
      query: (arg) => {
        const { searchTerm, currentPage, perPage } = arg;
        const queryParams = createQueryParams(searchTerm, currentPage, perPage);
        return `/database/search?${queryParams}`;
      },
      transformResponse: (response: ReleasesResponse) => {
        return transformReleasesResponse(response);
      },
    }),
    getRelease: builder.query<ReleaseResponse, string>({
      query: (id) => `/releases/${id}`,
    }),
  }),
});

export const {
  useGetReleaseQuery,
  useGetReleasesQuery,
  util: { getRunningQueriesThunk },
} = releasesApi;

export const { getRelease, getReleases } = releasesApi.endpoints;
