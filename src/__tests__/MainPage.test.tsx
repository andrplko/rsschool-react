import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { http, delay, HttpResponse } from 'msw';
import { server } from '../__mocks__/node';
import { renderWithProviders } from '../helpers/test-helpers';
import MainPage from '../pages/MainPage';

const pages = ['1', '2', '3', '...', '6'];

describe('MainPage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders pagination buttons correctly', async () => {
    const { findByText } = renderWithProviders(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const prevButton = await findByText('Prev');
    const nextButton = await findByText('Next');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    for (let i = 0; i < pages.length; i++) {
      const pageButton = await findByText(pages[i]);
      expect(pageButton).toBeInTheDocument();
    }
  });

  test('Verify that the component renders the specified number of cards', async () => {
    const { findAllByRole } = renderWithProviders(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const cards = await findAllByRole('link');
    expect(cards.length).toBe(2);
  });

  test('Check that an appropriate message is displayed if no cards are present', async () => {
    server.use(
      http.get('https://api.discogs.com/database/search', async () => {
        await delay(200);
        return HttpResponse.json(
          {
            results: [],
            pagination: {},
          },
          {
            status: 200,
          }
        );
      })
    );

    const { findByText } = renderWithProviders(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const message = await findByText(/Not Found/i);
    expect(message).toBeInTheDocument();
  });

  test('Validate that clicking on a card opens a detailed card component', async () => {
    const { findAllByRole, findAllByText } = renderWithProviders(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const links = await findAllByRole('link');
    fireEvent.click(links[0]);

    const detailedCardTitle = await findAllByText(/Mac Demarco 1/i);
    expect(detailedCardTitle[0]).toBeInTheDocument();
  });
});
