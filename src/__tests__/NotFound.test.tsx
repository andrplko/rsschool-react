import Custom404 from '@/pages/404';
import { render, screen } from '@testing-library/react';

test('Ensure that the 404 page is displayed when navigating to an invalid route', () => {
  render(<Custom404 />);
  const headingElement = screen.getByText(/404 - Page Not Found/i);
  expect(headingElement).toHaveTextContent('404 - Page Not Found');
});
