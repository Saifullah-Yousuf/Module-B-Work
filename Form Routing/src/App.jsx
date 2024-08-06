import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../src/Screen/Login/Login';
import SignUp from '../src/Screen/SignUp/SignUp';
import Dashboard from '../src/Screen/Dashboard/Dashboard';
import SingleCard from '../src/Screen/Single Card/SingleCard';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/singlecard/:id' element={<SingleCard />} />
      </Routes>
    </div>
  );
};

export default App;
