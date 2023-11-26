import { fireEvent, screen, render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import updateQueryParams from '@/utils/updateQueryParams';
import { useRouter } from 'next/router';

const inputValue = 'Test search term';

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    replace: jest.fn(),
    route: '/',
    pathname: '/',
    query: { q: 'test', page: '2' },
    asPath: '',
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

jest.mock('../utils/updateQueryParams', () => jest.fn());

describe('SearchBar component', () => {
  test('should save entered value to store on button click', () => {
    const router = useRouter();
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText(
      'Search'
    ) as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeInTheDocument();

    fireEvent.change(searchInput, {
      target: { value: inputValue },
    });
    fireEvent.click(button);

    expect(updateQueryParams).toHaveBeenCalledTimes(1);
    expect(updateQueryParams).toHaveBeenCalledWith(router, {
      q: inputValue,
      page: '1',
    });

    expect(searchInput.value).toBe(inputValue);
  });
});
