import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Cart from './Screens/Cart';
import About from './Screens/About';
import Manager from './Screens/Manager';
import PaymentList from './Screens/PaymentList';
import StaffForm from './Screens/StaffForm';
import StaffList from './Screens/StaffList';
import BookingForm from './Screens/BookingForm';
import BookingList from './Screens/BookingList';
import CustomerForm from './Screens/CustomerForm';
import CustomerList from './Screens/CustomerList';
import ManagerList from './Screens/ManagerList';
import LoginManager from './Screens/LoginManager';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/paymentlist" element={<PaymentList />} />
        <Route path="/Staff/StaffForm" element={<StaffForm />} />
        <Route path="/Staff/StaffList" element={<StaffList />} />
        <Route path="/Booking/BookingForm" element={<BookingForm />} />
        <Route path="/Booking/BookingList" element={<BookingList />} />
        <Route path="/Customer/CustomerForm" element={<CustomerForm />} />
        <Route path="/Customer/CustomerList" element={<CustomerList />} />
        <Route path="/manager" element={<Manager />} /> 
        <Route path="/LoginManager" element={<LoginManager />} />
        <Route path="/ManagerList" element={<ManagerList />} />
      </Routes>
    </div>
  );
}

export default App;