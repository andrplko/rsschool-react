import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { countriesSlice } from './slices/countries';
import { ReactHookFormSlice } from './slices/ReactHookForm';
import { UncontrolledFormSlice } from './slices/UncontrolledForm';

export const setupStore = () =>
  configureStore({
    reducer: {
      countries: countriesSlice.reducer,
      ReactHookForm: ReactHookFormSlice.reducer,
      UncontrolledForm: UncontrolledFormSlice.reducer,
    },
  });

const store = setupStore();
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
