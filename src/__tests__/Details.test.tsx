import { waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Details from '../components/Details';
import { renderWithProviders } from '../helpers/test-helpers';

describe('Tests for the Detailed Card component:', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Make sure the detailed card component correctly displays the detailed card data', async () => {
    const routes = [
      {
        path: '/release',
        children: [
          {
            path: ':id',
            element: <Details />,
          },
        ],
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/release/1'],
      initialIndex: 1,
    });

    const { getByText } = renderWithProviders(
      <RouterProvider router={router} />
    );

    await waitFor(() => {
      expect(getByText('Artist 1')).toBeInTheDocument();
      expect(getByText('Album Title')).toBeInTheDocument();
      expect(getByText('1. Track 1')).toBeInTheDocument();
      expect(getByText('2. Track 2')).toBeInTheDocument();
      expect(getByText('3:30')).toBeInTheDocument();
      expect(getByText('4:15')).toBeInTheDocument();
    });
  });
});
