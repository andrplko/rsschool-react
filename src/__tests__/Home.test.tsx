import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/pages';
import {
  mockPaginationData,
  mockRelease,
  mockTransformedReleases,
} from '@/__mocks__/mockData';
import updateQueryParams from '@/utils/updateQueryParams';
import { useRouter } from 'next/router';

const pages = ['1', '2', '3', '...', '6'];

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    replace: jest.fn(),
    route: '/',
    pathname: '/',
    query: {},
    asPath: '',
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

jest.mock('../utils/updateQueryParams', () => jest.fn());

describe('MainPage component', () => {
  test('Validate that clicking on a card opens a detailed card component', async () => {
    const router = useRouter();
    render(
      <Home
        release={mockRelease}
        releases={{
          results: mockTransformedReleases,
          pagination: mockPaginationData,
        }}
      />
    );

    const card = screen.getAllByTestId('card');
    fireEvent.click(card[0]);

    expect(updateQueryParams).toHaveBeenCalledTimes(1);
    expect(updateQueryParams).toHaveBeenCalledWith(router, {
      id: '8100827',
    });
  });

  test('renders prev pagination button correctly', async () => {
    const router = useRouter();
    render(
      <Home
        release={mockRelease}
        releases={{
          results: mockTransformedReleases,
          pagination: mockPaginationData,
        }}
      />
    );

    const prevButton = await screen.findByText('Prev');
    expect(prevButton).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(updateQueryParams).toHaveBeenCalledTimes(1);
    expect(updateQueryParams).toHaveBeenCalledWith(router, {
      page: '1',
    });
  });

  test('renders pages pagination button correctly', async () => {
    const router = useRouter();
    render(
      <Home
        release={mockRelease}
        releases={{
          results: mockTransformedReleases,
          pagination: mockPaginationData,
        }}
      />
    );

    for (let i = 0; i < pages.length; i++) {
      expect(await screen.findByText(pages[i])).toBeInTheDocument();
    }

    const pageButton = screen.getByText(pages[1]);
    fireEvent.click(pageButton);

    expect(updateQueryParams).toHaveBeenCalledTimes(1);
    expect(updateQueryParams).toHaveBeenCalledWith(router, {
      page: '2',
    });
  });

  test('renders next pagination button correctly', async () => {
    const router = useRouter();
    render(
      <Home
        release={mockRelease}
        releases={{
          results: mockTransformedReleases,
          pagination: mockPaginationData,
        }}
      />
    );

    const nextButton = await screen.findByText('Next');
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(updateQueryParams).toHaveBeenCalledTimes(1);
    expect(updateQueryParams).toHaveBeenCalledWith(router, {
      page: '3',
    });
  });

  test('Verify that the component renders the specified number of cards', async () => {
    render(
      <Home
        release={mockRelease}
        releases={{
          results: mockTransformedReleases,
          pagination: mockPaginationData,
        }}
      />
    );

    const cards = await screen.findAllByTestId('card');
    expect(cards.length).toBe(2);
  });

  test('Check that an appropriate message is displayed if no cards are present', async () => {
    render(
      <Home
        release={null}
        releases={{
          results: [],
          pagination: { page: 0, per_page: 0, pages: 0, items: 0 },
        }}
      />
    );

    const message = await screen.findByText(/No results/i);
    expect(message).toBeInTheDocument();
  });
});
