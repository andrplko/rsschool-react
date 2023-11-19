import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { renderWithProviders } from '../helpers/test-helpers';

const inputValue = 'Test search term';

describe('SearchBar component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should save entered value to store on button click', () => {
    const { getByRole, getByPlaceholderText } = renderWithProviders(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    const searchInput = getByPlaceholderText('Search') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    const button = getByRole('button', { name: /search/i });
    expect(button).toBeInTheDocument();

    fireEvent.change(searchInput, {
      target: { value: inputValue },
    });
    fireEvent.click(button);

    expect(searchInput.value).toBe(inputValue);
  });
});
