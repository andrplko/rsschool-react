import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import { renderWithProviders } from '../helpers/test-helpers';

const dropdownValues = [4, 6, 8, 10, 12];
const defaultSelectedText = 'Select value';

describe('Dropdown', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update state when a dropdown item is clicked', () => {
    const { getByText } = renderWithProviders(
      <MemoryRouter>
        <Dropdown />
      </MemoryRouter>
    );

    expect(getByText(defaultSelectedText)).toBeInTheDocument();

    fireEvent.click(getByText(defaultSelectedText));

    dropdownValues.forEach((value) => {
      expect(getByText(String(value))).toBeInTheDocument();
    });

    const selectedValue = dropdownValues[3];
    fireEvent.click(getByText(String(selectedValue)));

    expect(getByText(String(selectedValue))).toBeInTheDocument();
  });
});
