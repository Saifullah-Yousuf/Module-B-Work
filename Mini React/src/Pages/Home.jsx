import React from 'react';
import Navbar from '../Components/Navbar';
import RoomCard from '../Components/RoomCard';
import { Grid } from '@mui/material';
import Img1 from '../../src/assets/roomimg01.jpg';
import Img2 from '../../src/assets/roomimg02.jpg';
import Img3 from '../../src/assets/roomimg03.jpg';
import Img4 from '../../src/assets/roomimg04.jpg';
import Img5 from '../../src/assets/roomimg05.jpg';
import Img6 from '../../src/assets/roomimg06.jpg';
import Img7 from '../../src/assets/roomimg07.jpg';
import Img8 from '../../src/assets/roomimg08.jpg';
import Img9 from '../../src/assets/roomimg09.jpg';
import Img10 from '../../src/assets/roomimg10.jpg';
import Img11 from '../../src/assets/roomimg11.jpg';
import Img12 from '../../src/assets/roomimg12.jpg';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Grid container spacing={2}>
          {[
            { imgg: Img1, roomId: 'ERY00-5TPP-01', roomNum: '01', bedType: 'Single', status: 'Available', price: '15,000' },
            { imgg: Img2, roomId: 'ERY00-5TPP-02', roomNum: '02', bedType: 'Single', status: 'Available', price: '15,000' },
            { imgg: Img3, roomId: 'ERY00-5TPP-03', roomNum: '03', bedType: 'Double', status: 'Available', price: '25,000' },
            { imgg: Img4, roomId: 'ERY00-5TPP-04', roomNum: '04', bedType: 'Triple', status: 'Available', price: '35,000' },
            { imgg: Img5, roomId: 'ERY00-5TPP-05', roomNum: '05', bedType: 'Single', status: 'Available', price: '15,000' },
            { imgg: Img6, roomId: 'ERY00-5TPP-06', roomNum: '06', bedType: 'Triple', status: 'Available', price: '35,000' },
            { imgg: Img7, roomId: 'ERY00-5TPP-07', roomNum: '07', bedType: 'Double', status: 'Available', price: '25,000' },
            { imgg: Img8, roomId: 'ERY00-5TPP-08', roomNum: '08', bedType: 'Double', status: 'Available', price: '25,000' },
            { imgg: Img9, roomId: 'ERY00-5TPP-09', roomNum: '09', bedType: 'Single', status: 'Available', price: '15,000' },
            { imgg: Img10, roomId: 'ERY00-5TPP-10', roomNum: '10', bedType: 'Triple', status: 'Available', price: '35,000' },
            { imgg: Img11, roomId: 'ERY00-5TPP-11', roomNum: '11', bedType: 'Triple', status: 'Available', price: '35,000' },
            { imgg: Img12, roomId: 'ERY00-5TPP-12', roomNum: '12', bedType: 'Double', status: 'Available', price: '25,000' },
          ].map((room, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <RoomCard 
                roomId={room.roomId} 
                roomNum={room.roomNum} 
                BedType={room.bedType} 
                status={room.status} 
                Price={room.price} 
                imgg={room.imgg} 
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
