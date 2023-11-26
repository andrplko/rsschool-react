import Layout from '@/components/Layout';
import { render, screen } from '@testing-library/react';
import { PropsWithChildren } from 'react';

jest.mock('next/head', () => ({ children }: PropsWithChildren) => (
  <div data-testid="mockHead">{children}</div>
));
jest.mock('../components/Header', () => () => (
  <div data-testid="mockHeader">Header</div>
));
jest.mock(
  '../components/ErrorBoundary',
  () =>
    ({ children }: PropsWithChildren) => (
      <div data-testid="mockErrorBoundary">{children}</div>
    )
);

describe('Layout Component', () => {
  test('renders Layout component with Head, Header, and ErrorBoundary', () => {
    render(
      <Layout>
        <div data-testid="mockChild">Child Component</div>
      </Layout>
    );

    expect(screen.getByTestId('mockHead')).toBeInTheDocument();
    expect(screen.getByTestId('mockHeader')).toBeInTheDocument();
    expect(screen.getByTestId('mockErrorBoundary')).toBeInTheDocument();
    expect(screen.getByTestId('mockChild')).toBeInTheDocument();
  });
});
