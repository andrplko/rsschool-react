import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../helpers/test-helpers';
import { routesConfig } from '../router';

describe('Tests for the 404 Page component', () => {
  test('Ensure that the 404 page is displayed when navigating to an invalid route', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/adasdas'],
    });

    const { getByText } = renderWithProviders(
      <RouterProvider router={router} />
    );
    const headingElement = getByText(/404 - Page Not Found/i);
    const paragraphElement = getByText(
      'Sorry, the page you are looking for could not be found.'
    );

    expect(headingElement).toHaveTextContent('404 - Page Not Found');
    expect(paragraphElement).toBeInTheDocument();
  });
});
