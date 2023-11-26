import { PaginationData, Release, ReleaseData, ReleaseResponse } from '@/types';

export const mockRelease: ReleaseResponse = {
  id: 8100827,
  artists: [{ name: 'Artist 1' }],
  title: 'Album Title',
  tracklist: [
    { title: 'Track 1', duration: '3:30' },
    { title: 'Track 2', duration: '4:15' },
  ],
};

export const mockPaginationData: PaginationData = {
  page: 2,
  per_page: 6,
  pages: 6,
  items: 36,
};

export const mockTransformedReleases: Release[] = [
  {
    id: 8100827,
    title: 'Mr. Fingers - Outer Acid EP',
    cover_image:
      'https://i.discogs.com/sFqpfpapH3UrGS9_tNWPnLTnExs79bsJ5epG06FooVs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxMDA4/MjctMTQ1NzUzNDQ1/MC0zMTMyLmpwZWc.jpeg',
    year: '2016',
    style: ['House', 'Deep House', 'Acid House'],
    genre: ['Electronic'],
  },
  {
    id: 5100827,
    title: 'Mr. Gingers - Outer Acid EP',
    cover_image:
      'https://i.discogs.com/sFqpfpapH3UrGS9_tNWPnLTnExs79bsJ5epG06FooVs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxMDA4/MjctMTQ1NzUzNDQ1/MC0zMTMyLmpwZWc.jpeg',
    year: '2011',
    style: ['House'],
    genre: ['Electronic'],
  },
];

export const mockReleases: ReleaseData[] = [
  {
    country: 'Netherlands',
    year: '2016',
    format: ['Vinyl', '12"', '33 ⅓ RPM', 'EP'],
    label: [
      'Alleviated Records',
      'Alleviated Records \u0026 Music',
      'Alleviated Records \u0026 Music',
      'Clone Distribution',
      'Clone Distribution',
      'Alleviated Music',
      'Record Industry',
    ],
    type: 'release',
    genre: ['Electronic'],
    style: ['House', 'Deep House', 'Acid House'],
    id: 8100827,
    barcode: ['15028 1A ML-2231', '15028 1B ML-2231', 'ASCAP'],
    master_id: 977922,
    master_url: 'https://api.discogs.com/masters/977922',
    uri: '/Mr-Fingers-Outer-Acid-EP/release/8100827',
    catno: 'ML-2231',
    title: 'Mr. Fingers - Outer Acid EP',
    thumb:
      'https://i.discogs.com/M_mQnR4Nu25PO-AJiHrzaJwKbf7xlLHi0QiQOE3EyS0/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxMDA4/MjctMTQ1NzUzNDQ1/MC0zMTMyLmpwZWc.jpeg',
    cover_image:
      'https://i.discogs.com/sFqpfpapH3UrGS9_tNWPnLTnExs79bsJ5epG06FooVs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxMDA4/MjctMTQ1NzUzNDQ1/MC0zMTMyLmpwZWc.jpeg',
    resource_url: 'https://api.discogs.com/releases/8100827',
    community: {
      want: 2187,
      have: 2620,
    },
    format_quantity: 1,
    formats: [
      {
        name: 'Vinyl',
        qty: '1',
        descriptions: ['12"', '33 ⅓ RPM', 'EP'],
      },
    ],
  },
  {
    country: 'Poland',
    year: '2011',
    format: ['Vinyl', '12"', '33 ⅓ RPM', 'EP'],
    label: [
      'Alleviated Records',
      'Alleviated Records \u0026 Music',
      'Alleviated Records \u0026 Music',
      'Clone Distribution',
      'Clone Distribution',
      'Alleviated Music',
      'Record Industry',
    ],
    type: 'release',
    genre: ['Electronic'],
    style: ['House'],
    id: 5100827,
    barcode: ['15028 1A ML-2231', '15028 1B ML-2231', 'ASCAP'],
    master_id: 977922,
    master_url: 'https://api.discogs.com/masters/977922',
    uri: '/Mr-Fingers-Outer-Acid-EP/release/8100827',
    catno: 'ML-2231',
    title: 'Mr. Gingers - Outer Acid EP',
    thumb:
      'https://i.discogs.com/M_mQnR4Nu25PO-AJiHrzaJwKbf7xlLHi0QiQOE3EyS0/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxMDA4/MjctMTQ1NzUzNDQ1/MC0zMTMyLmpwZWc.jpeg',
    cover_image:
      'https://i.discogs.com/sFqpfpapH3UrGS9_tNWPnLTnExs79bsJ5epG06FooVs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxMDA4/MjctMTQ1NzUzNDQ1/MC0zMTMyLmpwZWc.jpeg',
    resource_url: 'https://api.discogs.com/releases/8100827',
    community: {
      want: 2187,
      have: 2620,
    },
    format_quantity: 1,
    formats: [
      {
        name: 'Vinyl',
        qty: '1',
        descriptions: ['12"', '33 ⅓ RPM', 'EP'],
      },
    ],
  },
];
