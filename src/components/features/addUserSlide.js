import { createSlice } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const addUserSlides = createSlice({
  name: 'addUserSlide',
  initialState: [],
  reducers: {
    addUserSlide: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
      const usersCollectionRef = collection(db, 'users');
      addDoc(usersCollectionRef, state[0]);
    },
    removeUserSlide: (state, action) => {
      state = [];
      // const removeaddUserSlideID = action.payload;
      // state = state.filter((password) => password.id !== removeaddUserSlideID.id);
      return state;
    },
  },
});

const { reducer, actions } = addUserSlides;
export const { addUserSlide, removeUserSlide } = actions;
export default reducer;
