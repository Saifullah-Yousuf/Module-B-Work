import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img01 from '../../../src/assets/Slider01.webp';
import Img02 from '../../assets/Slider02.webp';
import Img03 from '../../assets/Slider03.webp';
import Button from 'react-bootstrap/Button';

const CarouselPage = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img01}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img02}
          alt="Second slide"
        />
        <Carousel.Caption style={{color: 'black',textAlign: 'center',alignItems: 'center',left: '0',transform: 'translateY(-50%)',top: '50%',position: 'absolute',width: '100%',paddingRight: '50%'}}>
          <h1>INTERMIX '24</h1>
          <h4>UNSTITCHED</h4>
          <Button variant="dark">Dark</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img03}
          alt="Third slide"
        />
        <Carousel.Caption style={{color: 'black',textAlign: 'center',alignItems: 'center',right: '0',transform: 'translateY(-50%)',top: '50%',position: 'absolute',width: '100%'}}>
          <h1>DAY TO DAY V</h1>
          <h4>UNSTITCHED</h4>
          <Button variant="dark">Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage

