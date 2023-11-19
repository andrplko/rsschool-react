import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Release } from '../../../types';

interface ReleasesState {
  results: Release[];
  isFetching: boolean;
}

const initialState: ReleasesState = {
  results: [],
  isFetching: true,
};

export const releasesSlice = createSlice({
  name: 'releases',
  initialState,
  reducers: {
    setReleases: (state, action: PayloadAction<Release[]>) => {
      state.results = action.payload;
    },
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
  },
});

export const { setReleases, setIsFetching } = releasesSlice.actions;

export default releasesSlice.reducer;
