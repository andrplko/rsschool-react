import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ReactHookFormState {
  [key: string]: string;
}

const initialState: ReactHookFormState = {
  name: '',
  age: '',
  email: '',
  password: '',
  gender: '',
  picture: '',
  country: '',
};

export const ReactHookFormSlice = createSlice({
  name: 'ReactHookForm',
  initialState,
  reducers: {
    setReactHookFormData: (
      state,
      { payload }: PayloadAction<ReactHookFormState>
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

export const { setReactHookFormData } = ReactHookFormSlice.actions;

export default ReactHookFormSlice.reducer;
