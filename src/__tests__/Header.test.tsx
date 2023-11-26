import Header from 'components/Header';
import { render, screen } from '@testing-library/react';
import { PropsWithChildren } from 'react';

jest.mock('../components/Wrapper', () => ({ children }: PropsWithChildren) => (
  <div data-testid="mockWrapper">{children}</div>
));
jest.mock('../components/ErrorButton', () => () => (
  <div data-testid="mockErrorButton">Error Button</div>
));
jest.mock('../components/SearchBar', () => () => (
  <div data-testid="mockSearchBar">Search Bar</div>
));
jest.mock('../components/Logo', () => () => (
  <div data-testid="mockLogo">Logo</div>
));

describe('Header Component', () => {
  test('renders Header component with Wrapper, ErrorButton, SearchBar, and Logo', () => {
    render(<Header />);

    expect(screen.getByTestId('mockWrapper')).toBeInTheDocument();
    expect(screen.getByTestId('mockErrorButton')).toBeInTheDocument();
    expect(screen.getByTestId('mockSearchBar')).toBeInTheDocument();
    expect(screen.getByTestId('mockLogo')).toBeInTheDocument();
  });
});
