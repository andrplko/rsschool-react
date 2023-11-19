import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PaginationData } from '../../../types';

const initialState: PaginationData = {
  page: 0,
  per_page: 0,
  pages: 0,
  items: 0,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPaginationData: (state, { payload }: PayloadAction<PaginationData>) => {
      state.page = payload.page;
      state.per_page = payload.per_page;
      state.pages = payload.pages;
      state.items = payload.items;
    },
  },
});

export const { setPaginationData } = paginationSlice.actions;

export default paginationSlice.reducer;
