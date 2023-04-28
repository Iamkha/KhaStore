import { createSlice } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const addEditAccounts = createSlice({
  name: 'addEditAccount',
  initialState: [],
  reducers: {
    addEditAccount: (state, action) => {
      state.push(action.payload);
      console.log(action.payload, 'dsadsa');
      console.log(state[0], 'state');
    },
    removeEditAccount: (state, action) => {
      state = [];
      // const removeaddUserSlideID = action.payload;
      // state = state.filter((password) => password.id !== removeaddUserSlideID.id);
      return state;
    },
  },
});

const { reducer, actions } = addEditAccounts;
export const { addEditAccount, removeEditAccount } = actions;
export default reducer;
