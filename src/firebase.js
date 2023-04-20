// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REDIECT_API_KEY,
  authDomain: 'shop-d2946.firebaseapp.com',
  projectId: 'shop-d2946',
  storageBucket: 'shop-d2946.appspot.com',
  messagingSenderId: '485021257813',
  appId: '1:485021257813:web:efd15a2235a33ae25f84dc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db = getFirestore(app);
