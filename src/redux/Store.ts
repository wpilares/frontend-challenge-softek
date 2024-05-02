import { type FormProps } from '@types';
import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from '@src/redux/states';

export interface AppStore {
  form: FormProps;
}

export default configureStore<AppStore>({
  reducer: {
    form: formSlice.reducer,
  },
});
