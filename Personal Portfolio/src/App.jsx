import React  from 'react';
import Dashboard from './Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
