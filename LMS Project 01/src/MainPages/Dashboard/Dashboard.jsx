

import React from 'react';
import Navbar from '../../Components/Navbar'; // Adjust path if necessary
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Box sx={{ marginTop: '64px' }}> */}
        {/* <h1>Dashboard</h1> */}
      {/* </Box> */}
    </div>
  );
};

export default Dashboard;

