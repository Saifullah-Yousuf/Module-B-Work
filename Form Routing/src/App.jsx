import React from 'react';
import Login from '../src/Screen/Login/Login'
import SignUp from '../src/Screen/SignUp/SignUp'
import Dashboard from '../src/Screen/Dashboard/Dashboard';
import { Routes , Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
