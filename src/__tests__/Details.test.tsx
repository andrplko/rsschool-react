import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Details from '../components/Details';

const FAKE_RELEASE_DATA = {
  artists: [{ name: 'Artist 1' }],
  title: 'Album Title',
  tracklist: [
    { title: 'Track 1', duration: '3:30' },
    { title: 'Track 2', duration: '4:15' },
  ],
};

const FAKE_STATE = { state: 'idle' };

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(() => FAKE_RELEASE_DATA),
  useNavigation: jest.fn(() => FAKE_STATE),
}));

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

describe('Tests for the Detailed Card component:', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Make sure the detailed card component correctly displays the detailed card data', async () => {
    const { getByText } = render(<RouterProvider router={router} />);

    expect(getByText('Artist 1')).toBeInTheDocument();
    expect(getByText('Album Title')).toBeInTheDocument();
    expect(getByText('1. Track 1')).toBeInTheDocument();
    expect(getByText('2. Track 2')).toBeInTheDocument();
    expect(getByText('3:30')).toBeInTheDocument();
    expect(getByText('4:15')).toBeInTheDocument();
  });

  test('Make sure the loading indicator is displayed while fetching data', async () => {
    FAKE_STATE.state = 'loading';

    const { findByTestId } = render(<RouterProvider router={router} />);
    const loader = await findByTestId('loader');

    expect(loader).toBeInTheDocument();
  });
});
