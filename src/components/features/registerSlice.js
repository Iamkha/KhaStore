import { createSlice } from '@reduxjs/toolkit';

const registers = createSlice({
  name: 'register',
  initialState: [],
  reducers: {
    addRegister: (state, action) => {
      state.push(action.payload);
    },
    removeRegister: (state, action) => {
      state = [];
      // const removeregisterID = action.payload;
      // state = state.filter((password) => password.id !== removeregisterID.id);
      return state;
    },
  },
});

const { reducer, actions } = registers;
export const { addRegister, removeRegister } = actions;
export default reducer;
