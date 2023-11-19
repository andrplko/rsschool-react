import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { setupStore } from './src/store/store';
import { releasesApi } from './src/services/releasesApi';
import { server } from './src/__mocks__/node';

const store = setupStore();

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
