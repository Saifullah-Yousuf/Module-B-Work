import React, { useRef } from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { IconButton, Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';


import Img1 from '../../assets/trandimg01.jpg';
import Img2 from '../../assets/trandimg02.jpg';
import Img3 from '../../assets/trandimg03.jpg';
import Img4 from '../../assets/trandimg04.jpg';
import Img5 from '../../assets/trandimg05.jpg';
import Img6 from '../../assets/trandimg06.jpg';
import Img7 from '../../assets/trandimg07.jpg';
import Img8 from '../../assets/trandimg08.jpg';


const cardData = [
  { title: 'Printed Arabic Lawn Shirt', description: 'This is the first card.', price: 'Rs.2,990.00', image: Img1 },
  { title: 'Printed Lawn Shirt', description: 'Summer New Arrivals', price: 'Rs.3,590.00', image: Img2 },
  { title: 'Printed Lawn Shirt', description: 'Summer New Arrivals', price: 'Rs.2,990.00', image: Img3 },
  { title: 'Printed Lawn Shirt', description: 'Summer New Arrivals', price: 'Rs.3,590.00', image: Img4 },
  { title: 'Solid Dobby Shirt', description: 'Summer New Arrivals', price: 'Rs.4,590.00', image: Img5 },
  { title: 'Solid Seersucker Shirt', description: 'Summer New Arrivals', price: 'Rs.3,990.00', image: Img6 },
  { title: 'Printed Lawn Flared Shirt', description: 'Summer New Arrivals', price: 'Rs.3,590.00', image: Img7 },
  { title: 'Printed Lawn Shirt', description: 'Summer New Arrivals', price: 'Rs.3,590.00', image: Img8 },
];

const CardItem = ({ title, description, price, image }) => {
  const [imgClicked, setImgClicked] = React.useState(false);

  const handleImageClick = () => {
    setImgClicked(!imgClicked);
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        margin: '0 auto', 
        borderRadius: '10px', 
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
        transition: 'transform 0.3s ease-in-out',
        position: 'relative'
      }}
      style={{
        textAlign: 'center'
      }}
    >
      <CardMedia
        component="img"
        height="410"
        image={image}
        alt={title}
        style={{
          objectFit: 'cover', 
          borderRadius: '10px 10px 0 0',
          transform: imgClicked ? 'translateY(-10px)' : 'translateY(0px)',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onClick={handleImageClick}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {price}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          style={{ marginTop: '10px',
            width: '70%'
          }}
          onClick={() => alert(`Clicked on ${title}`)} // Example action
        >
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};

const CardSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div style={{marginTop: "20px",marginBottom: '20px',textAlign: 'center'}}>
        <h1>TRENDING</h1>
    </div>
    <div style={{ position: 'relative', padding: '20px', overflow: 'hidden' }}>
      <Slider {...settings} ref={sliderRef} style={{ overflow: 'hidden' }}>
        {cardData.map((card, index) => (
          <div key={index} style={{ padding: '0 10px', boxSizing: 'border-box' }}>
            <CardItem
              title={card.title}
              description={card.description}
              price={card.price}
              image={card.image}
            />
          </div>
        ))}
      </Slider>
      <IconButton 
        onClick={() => sliderRef.current.slickPrev()}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          zIndex: 1,
          color: '#fff',
          backgroundColor: '#000',
          borderRadius: '50%',
          padding: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          transform: 'translateY(-50%)'
        }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton 
        onClick={() => sliderRef.current.slickNext()}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          zIndex: 1,
          color: '#fff',
          backgroundColor: '#000',
          borderRadius: '50%',
          padding: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          transform: 'translateY(-50%)'
        }}
      >
        <ChevronRight />
      </IconButton>
    </div>
    </>
  );
};

export default CardSlider;
