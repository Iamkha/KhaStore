import './App.css';
import { ref, child, get } from 'firebase/database';
import { database } from './firebase';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Nam from './components/Product/Nam';
import LogIn from './LoginLogOut/LogIn';
import Register from './LoginLogOut/Register';
import { useEffect } from 'react';
import NewPasswordEmail from './LoginLogOut/NewPasswordEmail';
import NewPassword from './LoginLogOut/NewPassword';

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

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nam" element={<Nam />} />
        <Route path="/customer/account/login" element={<LogIn />} />
        <Route path="/customer/account/create" element={<Register />} />
        <Route path="/customer/account/forgotpassword" element={<NewPasswordEmail />} />
        <Route path="/customer/account/newpassword" element={<NewPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
