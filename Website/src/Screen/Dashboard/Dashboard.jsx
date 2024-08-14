import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import CarouselPage from '../../Component/Carousel/CarouselPage';
import Cards from '../../Component/Cards/Cards';
import CardSlider from '../../Component/CardSlider/CardSlider';
import Footer from '../../Component/Footer/Footer';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <CarouselPage />
      <Cards />
      <CardSlider />
      <Footer />
    </div>
  )
}

export default Dashboard
