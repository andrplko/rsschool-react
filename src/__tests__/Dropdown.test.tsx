import { render, fireEvent } from '@testing-library/react';
import Dropdown from '../components/Dropdown';
import { setCurrentPage, setPerPage } from '../context/actions';

const dropdownValues = [4, 6, 8, 10, 12];
const defaultSelectedText = 'Select value';

jest.mock('../context', () => ({
  useAppContext: jest.fn(() => ({
    state: { perPage: 6 },
    dispatch: jest.fn(),
  })),
}));

jest.mock('../context/actions', () => ({
  setPerPage: jest.fn(),
  setCurrentPage: jest.fn(),
}));

describe('Dropdown', () => {
  it('should update state when a dropdown item is clicked', () => {
    const { getByText } = render(<Dropdown />);

    expect(getByText(defaultSelectedText)).toBeInTheDocument();

    fireEvent.click(getByText(defaultSelectedText));

    dropdownValues.forEach((value) => {
      expect(getByText(String(value))).toBeInTheDocument();
    });

    const selectedValue = dropdownValues[3];
    fireEvent.click(getByText(String(selectedValue)));

    expect(getByText(String(selectedValue))).toBeInTheDocument();

    expect(setPerPage).toHaveBeenCalledWith(
      expect.any(Function),
      selectedValue
    );
    expect(setCurrentPage).toHaveBeenCalledWith(expect.any(Function), 1);
  });
});
