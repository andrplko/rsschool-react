import { fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { Release } from '../types';
import { fetchReleases } from '../services/apiService';
import { setCurrentPage } from '../context/actions';

const mockReleases: Release[] = [
  {
    id: 1,
    title: 'Mac Demarco 1',
    cover_image: 'release.jpg',
    year: '1995',
    style: ['Indie-Rock', 'Lo-fi'],
    genre: ['Rock'],
  },
  {
    id: 2,
    title: 'Mac Demarco 2',
    cover_image: 'release.jpg',
    year: '1998',
    style: ['Indie-Rock'],
    genre: ['Rock'],
  },
];

const mockContextValue = {
  state: {
    searchTerm: 'test',
    currentPage: 1,
    perPage: 1,
    totalPages: 3,
    isLoading: false,
    releases: mockReleases,
  },
  dispatch: jest.fn(),
};

jest.mock('../context', () => ({
  ...jest.requireActual('../context'),
  useAppContext: jest.fn(() => mockContextValue),
}));

jest.mock('../context/actions', () => ({
  setCurrentPage: jest.fn(),
  setIsLoading: jest.fn(),
  setReleases: jest.fn(),
}));

jest.mock('../services/apiService', () => ({
  fetchReleases: jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => ({
        results: mockReleases,
      }),
    })
  ),
}));

describe('MainPage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders releases after fetching data', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByText('Mac Demarco 1')).toBeInTheDocument();
      expect(getByText('Mac Demarco 2')).toBeInTheDocument();
    });

    expect(fetchReleases).toHaveBeenCalledTimes(1);
    expect(fetchReleases).toHaveBeenCalledWith('test', 1, 1);
  });

  it('Ensure the component updates URL query parameter when page changes', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    const nextButton = getByText('Next');

    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(setCurrentPage).toHaveBeenCalledWith(expect.any(Function), 2);
    });
  });
});
