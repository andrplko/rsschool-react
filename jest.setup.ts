import '@testing-library/jest-dom';
import { server } from './src/__mocks__/node';
import { cleanup } from '@testing-library/react';
import { releasesApi } from '@/lib/releasesApi';
import { makeStore } from '@/lib/store';
import { NextRouter } from 'next/router';

const store = makeStore();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  jest.useRealTimers();
  cleanup();

  server.resetHandlers();

  store.dispatch(releasesApi.util.resetApiState());
});

afterAll(() => server.close());

export const mockRouter: NextRouter = {
  basePath: '/',
  pathname: '/',
  route: '/',
  query: { param2: 'value1' },
  asPath: '/',
  push: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  reload: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve()),
  back: jest.fn(() => Promise.resolve(true)),
  forward: jest.fn(() => Promise.resolve(true)),
  beforePopState: jest.fn(() => Promise.resolve(true)),
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isReady: true,
};

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

export function mockNextUseRouter(props?: Partial<NextRouter>) {
  useRouter.mockImplementation(() => ({
    ...mockRouter,
    ...props,
  }));
}

export function mockNextUseRouterOnce(props?: Partial<NextRouter>) {
  useRouter.mockImplementationOnce(() => ({
    ...mockRouter,
    ...props,
  }));
}
