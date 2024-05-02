import { type FormProps } from '@types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: FormProps = {
  dni: '',
  documentType: 'DNI',
  phone: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeForm: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeForm } = formSlice.actions;
