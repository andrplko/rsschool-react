import {
  mockPaginationData,
  mockReleases,
  mockTransformedReleases,
} from '@/__mocks__/mockData';
import transformReleasesResponse from '@/utils/transformReleasesResponse';

test('transform releases response correctly', () => {
  const transformedResponse = transformReleasesResponse({
    results: mockReleases,
    pagination: mockPaginationData,
  });

  expect(transformedResponse).toEqual({
    results: mockTransformedReleases,
    pagination: mockPaginationData,
  });
});
