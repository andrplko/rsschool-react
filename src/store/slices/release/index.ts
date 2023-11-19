import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ReleaseItem } from '../../../types';

interface ReleaseState {
  artists: Array<{ name: string }>;
  title: string;
  tracklist: Array<{ title: string; duration: string }>;
  isFetching: boolean;
}

const initialState: ReleaseState = {
  artists: [],
  title: '',
  tracklist: [],
  isFetching: true,
};

export const releaseSlice = createSlice({
  name: 'release',
  initialState,
  reducers: {
    setRelease: (state, { payload }: PayloadAction<ReleaseItem>) => {
      state.artists = payload.artists;
      state.title = payload.title;
      state.tracklist = payload.tracklist;
    },
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
  },
});

export const { setRelease, setIsFetching } = releaseSlice.actions;

export default releaseSlice.reducer;
