import { render } from '@testing-library/react';
import Logo from '../components/Logo';

test('renders logo image and title', () => {
  const { getByAltText, getByText } = render(<Logo />);

  expect(getByAltText('logo')).toBeInTheDocument();
  expect(getByText('Find Music')).toBeInTheDocument();
});
