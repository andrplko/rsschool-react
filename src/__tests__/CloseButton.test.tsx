import CloseButton from '@/components/CloseButton';
import removeQueryParams from '@/utils/removeQueryParams';
import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    replace: jest.fn(),
    route: '/',
    pathname: '/',
    query: { q: 'test', page: '1', per_page: '5', id: '123' },
    asPath: '',
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

jest.mock('../utils/removeQueryParams', () => jest.fn());

describe('CloseButton component', () => {
  test('clicking the close button hides the component', () => {
    const router = useRouter();
    render(<CloseButton />);

    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(removeQueryParams).toHaveBeenCalledTimes(1);
    expect(removeQueryParams).toHaveBeenCalledWith(router, 'id');
  });
});
