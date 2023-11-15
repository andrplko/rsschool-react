import { render, fireEvent } from '@testing-library/react';
import CloseButton from '../components/CloseButton';
import { Routes } from '../router/routes';

const mockedUsedNavigate = jest.fn();
const mockUseLocation = { search: '?q=search&page=1&pre_page=6' };

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockUseLocation,
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('CloseButton component', () => {
  test('clicking the close button hides the component', () => {
    const { getByRole } = render(<CloseButton />);

    const closeButton = getByRole('button');

    fireEvent.click(closeButton);

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(
      `${Routes.index}${mockUseLocation.search}`
    );
  });
});
