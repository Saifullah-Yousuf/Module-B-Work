import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './Navbar/Navbar';
import Slider from './Slider/Slider';
import CardSection01 from './Card Section 01/CardSection01';
import CardSection02 from './Card Section 02/CardSection02';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <CardSection01 />
      <CardSection02 />
    </div>
  )
}


export default App