import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CountriesData } from '../../../types';

interface CountriesState {
  countries: CountriesData;
}

const initialState: CountriesState = {
  countries: [],
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<CountriesData>) => {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
