import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { server } from './src/__mocks__/node';
import { setupStore } from './src/store/store';
import { releasesApi } from './src/services/releasesApi';
import { releaseApi } from './src/services/releaseApi';

const store = setupStore();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  jest.useRealTimers();
  cleanup();

  server.resetHandlers();

  store.dispatch(releaseApi.util.resetApiState());
  store.dispatch(releasesApi.util.resetApiState());
});

afterAll(() => server.close());
