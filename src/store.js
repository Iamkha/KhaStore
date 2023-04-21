import { configureStore } from '@reduxjs/toolkit';
import newPasswordReducer from './components/features/newPasswordSlice';
import newRegisterReducer from './components/features/registerSlice';
import newaddUserSlides from './components/features/addUserSlide';

const rootReducer = {
  newPasswords: newPasswordReducer,
  newRegister: newRegisterReducer,
  addUserSlides: newaddUserSlides,
};
export const store = configureStore({
  reducer: rootReducer,
});

export default store;
