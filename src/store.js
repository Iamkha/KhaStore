import { configureStore } from '@reduxjs/toolkit';
import newPasswordReducer from './components/features/newPasswordSlice';
import newRegisterReducer from './components/features/registerSlice';
import newaddUserSlides from './components/features/addUserSlide';
import newaddEditAccount from './components/features/editAccountSlide';

const rootReducer = {
  newPasswords: newPasswordReducer,
  newRegister: newRegisterReducer,
  addUserSlides: newaddUserSlides,
  addEditAccounts: newaddEditAccount,
};
export const store = configureStore({
  reducer: rootReducer,
});

export default store;
