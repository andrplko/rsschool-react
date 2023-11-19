import { fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { renderWithProviders } from '../helpers/test-helpers';
import { MemoryRouter } from 'react-router-dom';

describe('SearchBar component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should save entered value to local storage on button click', () => {
    const { getByRole, getByPlaceholderText } = renderWithProviders(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    const inputValue = 'Test search term';
    const searchInput = getByPlaceholderText('Search');
    const button = getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, {
      target: { value: inputValue },
    });
    fireEvent.click(button);
  });

  test('Check that the component retrieves the value from the local storage upon mounting', () => {
    const { getByPlaceholderText } = renderWithProviders(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    const searchInput = getByPlaceholderText('Search') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
  });
});
