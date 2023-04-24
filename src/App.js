import './App.css';
import { ref, child, get } from 'firebase/database';
import { database } from './firebase';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Nam from './components/Product/Nam';
import LogIn from './components/LoginLogOut/LogIn';
import Register from './components/LoginLogOut/Register';
import { useEffect } from 'react';
import NewPasswordEmail from './components/LoginLogOut/NewPasswordEmail';
import NewPassword from './components/LoginLogOut/NewPassword';
import MyAccount from './components/profile/MyAccount';
import MyOders from './components/profile/MyOders';
import AddressBooks from './components/profile/AddressBooks';
import AccountInformation from './components/profile/AccountInformation';
import ReviewDetails from './components/profile/ReviewDetails';
import AddNewAddress from './components/profile/AddNewAddress';

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
        <Route path="/sales/order/history" element={<MyOders />} />
        <Route path="/customer/address" element={<AddressBooks />} />
        <Route path="/customer/account/edit" element={<AccountInformation />} />
        <Route path="/review/customer/view/:view" element={<ReviewDetails />} />
        <Route path="/customer/account" element={<MyAccount />} />
        <Route path="/customer/address/new" element={<AddNewAddress />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
