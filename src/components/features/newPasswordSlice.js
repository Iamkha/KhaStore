import { createSlice } from '@reduxjs/toolkit';

const newPasswords = createSlice({
  name: 'newPassword',
  initialState: [],
  reducers: {
    addNewPassword: (state, action) => {
      state.push(action.payload);
    },
    removeNewPassword: (state, action) => {
      state = [];
      // const removeNewPasswordID = action.payload;
      // state = state.filter((password) => password.id !== removeNewPasswordID.id);
      return state;
    },
  },
});

const { reducer, actions } = newPasswords;
export const { addNewPassword, removeNewPassword } = actions;
export default reducer;
