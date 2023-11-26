import { mockRelease } from '@/__mocks__/mockData';
import Details from '@/components/Details';
import { render, screen, waitFor } from '@testing-library/react';

describe('Tests for the Detailed Card component:', () => {
  test('Make sure the detailed card component correctly displays the detailed card data', async () => {
    render(<Details release={mockRelease} />);

    await waitFor(() => {
      expect(screen.getByText('Artist 1')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Album Title')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('1. Track 1')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('2. Track 2')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('3:30')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('4:15')).toBeInTheDocument();
    });
  });
});
