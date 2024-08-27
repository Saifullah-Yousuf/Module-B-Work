import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Screen/Login";
import Signup from "./Screen/Signup";
import Dashboard from "./Screen/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
