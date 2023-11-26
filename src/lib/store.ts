import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { releasesApi } from './releasesApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const makeStore = () =>
  configureStore({
    reducer: {
      [releasesApi.reducerPath]: releasesApi.reducer,
    },
    middleware: (gDM) => gDM().concat(releasesApi.middleware),
  });

const store = makeStore();
setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
