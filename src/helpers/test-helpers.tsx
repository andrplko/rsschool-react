import { ReactElement, PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { AppStore, RootState } from '../store/store';
import { searchSlice } from '../store/slices/search';
import { releaseSlice } from '../store/slices/release';
import { releasesSlice } from '../store/slices/releases';
import { paginationSlice } from '../store/slices/pagination';
import { releasesApi } from '../services/releasesApi';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const reducer = {
  search: searchSlice.reducer,
  release: releaseSlice.reducer,
  releases: releasesSlice.reducer,
  pagination: paginationSlice.reducer,
  [releasesApi.reducerPath]: releasesApi.reducer,
};

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer,
      preloadedState,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(releasesApi.middleware),
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
