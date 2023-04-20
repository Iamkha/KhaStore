import { configureStore } from '@reduxjs/toolkit';
import newPasswordReducer from './components/features/newPasswordSlice';

const rootReducer = {
  newPasswords: newPasswordReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});

export default store;
