import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchSlice from './slices/search';
import releaseSlice from './slices/release';
import releasesSlice from './slices/releases';
import paginationSlice from './slices/pagination';
import { releaseApi } from '../services/releaseApi';
import { releasesApi } from '../services/releasesApi';

const reducers = {
  search: searchSlice,
  release: releaseSlice,
  releases: releasesSlice,
  pagination: paginationSlice,
  [releaseApi.reducerPath]: releaseApi.reducer,
  [releasesApi.reducerPath]: releasesApi.reducer,
};

const rootReducer = combineReducers({
  ...reducers,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        releaseApi.middleware,
        releasesApi.middleware
      ),
  });

const store = setupStore();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
