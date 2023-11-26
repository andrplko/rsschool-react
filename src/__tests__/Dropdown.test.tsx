import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from '../components/Dropdown';
import { useRouter } from 'next/router';
import updateQueryParams from '@/utils/updateQueryParams';

const dropdownValues = [4, 6, 8, 10, 12];
const defaultSelectedValue = 6;
const defaultSelectedText = 'Select value';

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    replace: jest.fn(),
    route: '/',
    pathname: '/',
    query: { q: 'test', page: '1', per_page: '6', id: '123' },
    asPath: '',
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

jest.mock('../utils/updateQueryParams', () => jest.fn());

describe('Dropdown', () => {
  it('should update state when a dropdown item is clicked', () => {
    const router = useRouter();
    render(<Dropdown perPage={defaultSelectedValue} />);

    const defaultSelectedElement = screen.getByText(defaultSelectedText);
    expect(defaultSelectedElement).toBeInTheDocument();

    fireEvent.click(defaultSelectedElement);

    dropdownValues.forEach((value) => {
      expect(screen.getByText(String(value))).toBeInTheDocument();
    });

    const selectedValue = dropdownValues[3];
    fireEvent.click(screen.getByText(String(selectedValue)));

    expect(updateQueryParams).toHaveBeenCalledTimes(1);
    expect(updateQueryParams).toHaveBeenCalledWith(router, {
      page: '1',
      per_page: String(selectedValue),
    });

    expect(screen.getByText(String(selectedValue))).toBeInTheDocument();
  });
});
