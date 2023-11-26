import { render, screen } from '@testing-library/react';
import Logo from '../components/Logo';

test('renders logo image and title', () => {
  render(<Logo />);

  expect(screen.getByAltText('logo')).toBeInTheDocument();
  expect(screen.getByText('Find Music')).toBeInTheDocument();
});
