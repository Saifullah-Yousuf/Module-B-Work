import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Screen/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import ManCards from './Screen/ManCards/ManCards';
import ManSingleCards from './Screen/ManCards/ManSingleCards';
import WomanCard from './Screen/WomanCard/WomanCard'
import WomenSingleCards from './Screen/WomanCard/WomenSingleCard';
import KidsCard from './Screen/KidsCard/KidsCard';
import KidsSingleCards from './Screen/KidsCard/KidsSingleCard'


const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/mancards' element={<ManCards />} />   
        <Route path='/mansinglecards/:id' element={<ManSingleCards />} />
        <Route path='/womencards' element={<WomanCard />} />
        <Route path='/womensinglecards/:id' element={<WomenSingleCards />} />
        <Route path='/kidscards' element={<KidsCard />} />
        <Route path='/kidssinglecards/:id' element={<KidsSingleCards />} />
      </Routes>
    </div>
  )
}

export default App
