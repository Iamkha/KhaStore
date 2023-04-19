import './App.css';
import { ref, child, get } from 'firebase/database';
import { database } from './firebase';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Nam from './components/Product/Nam';
import LogIn from './LoginLogOut/LogIn';
import { useEffect } from 'react';
import { setCookie } from './components/cookies/Cookies';

function App() {
  const dbRef = ref(database);
  get(child(dbRef, `user`))
    .then((snapshot) => {
      if (snapshot.exists()) {
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {});

  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nam" element={<Nam />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
