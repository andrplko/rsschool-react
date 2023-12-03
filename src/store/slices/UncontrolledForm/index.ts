import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UncontrolledFormState {
  [key: string]: string;
}

const initialState: UncontrolledFormState = {
  name: '',
  age: '',
  email: '',
  password: '',
  gender: '',
  picture: '',
  country: '',
};

export const UncontrolledFormSlice = createSlice({
  name: 'UncontrolledForm',
  initialState,
  reducers: {
    setUncontrolledFormData: (
      state,
      { payload }: PayloadAction<UncontrolledFormState>
    ) => {
      state.name = payload.name;
      state.age = payload.age;
      state.email = payload.email;
      state.password = payload.password;
      state.gender = payload.gender;
      state.picture = payload.picture;
      state.country = payload.country;
    },
  },
});

export const { setUncontrolledFormData } = UncontrolledFormSlice.actions;

export default UncontrolledFormSlice.reducer;
