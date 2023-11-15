import { fireEvent, render } from '@testing-library/react';
import ReleasesList from '../components/ReleasesList';
import { MemoryRouter } from 'react-router-dom';
import { Release } from '../types';
import MainPage from '../pages/MainPage';
import { ReactElement } from 'react';

const mockReleases: Release[] = [
  {
    id: 1,
    title: 'Mac Demarco',
    cover_image: 'release.jpg',
    year: '1995',
    style: ['Indie-Rock', 'Lo-fi'],
    genre: ['Rock'],
  },
  {
    id: 2,
    title: 'Mac Demarco',
    cover_image: 'release.jpg',
    year: '1998',
    style: ['Indie-Rock'],
    genre: ['Rock'],
  },
];

const mockContextValue = {
  state: {
    isLoading: false,
    releases: mockReleases,
  },
  dispatch: jest.fn(),
};

jest.mock('../context', () => ({
  ...jest.requireActual('../context'),
  useAppContext: jest.fn(() => mockContextValue),
}));

const renderWithRouter = (ui: ReactElement) => {
  return render(
    <MemoryRouter initialEntries={['/', '/release/1']}>{ui}</MemoryRouter>
  );
};

describe('Tests for the Releases List component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Verify that the component renders the specified number of cards', () => {
    const { queryAllByRole } = renderWithRouter(<ReleasesList />);

    const cards = queryAllByRole('link');
    expect(cards.length).toBe(mockReleases.length);
  });

  test('Check that an appropriate message is displayed if no cards are present', () => {
    mockContextValue.state.releases = [];

    const { queryAllByRole, queryByText } = renderWithRouter(<MainPage />);

    const links = queryAllByRole('link');
    expect(links.length).toBe(0);

    const message = queryByText(/Not Found/i);
    expect(message).toBeInTheDocument();
  });

  test('Validate that clicking on a card opens a detailed card component', () => {
    mockContextValue.state.releases = mockReleases;

    const { getAllByRole, getAllByText } = renderWithRouter(<MainPage />);

    const links = getAllByRole('link');
    fireEvent.click(links[0]);

    const detailedCardTitle = getAllByText(/Mac Demarco/i);
    expect(detailedCardTitle[0]).toBeInTheDocument();
  });
});
