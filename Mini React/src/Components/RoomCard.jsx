import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Button } from '@mui/material';
import { Room, AttachMoney, Bed, CheckCircle, Block } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const RoomCard = ({ roomId, roomNum, BedType, status, Price, imgg }) => {
  const navigate = useNavigate();


  const handleBookNowClick = () => {
    navigate('/cart', { state: { roomId, roomNum, BedType, status, Price } });
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: '10px', boxShadow: 3, margin: '20px', backgroundColor: '#f9f9f9' }}>
      <CardMedia
        component="img"
        height="200"
        image={imgg} 
        alt="Room"
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: '#333', fontWeight: 'bold' }}>
          Room ID: {roomId}
        </Typography>
        <Typography variant="h6" sx={{ color: '#555' }}>
          <IconButton sx={{ padding: 0 }}>
            <Room sx={{ color: '#018C8D' }} />
          </IconButton>
          Room Number: {roomNum}
        </Typography>
        <Typography variant="h6" sx={{ color: '#555' }}>
          <IconButton sx={{ padding: 0 }}>
            <Bed sx={{ color: '#018C8D' }} />
          </IconButton>
          Bed Type: {BedType}
        </Typography>
        <Typography variant="h6" sx={{ color: '#555' }}>
          <IconButton sx={{ padding: 0 }}>
            <StatusIcon status={status} />
          </IconButton>
          Status: {status}
        </Typography>
        <Typography variant="h6" sx={{ color: '#018C8D', fontWeight: 'bold' }}>
          <IconButton sx={{ padding: 0 }}>
            <AttachMoney sx={{ color: '#018C8D' }} />
          </IconButton>
          Price: {Price}
        </Typography>


        <Button 
          variant="contained" 
          sx={{ 
            marginTop: '10px', 
            backgroundColor: 'black', 
            color: 'silver', 
            '&:hover': { 
              backgroundColor: '#333'  // Darker on hover
            } 
          }} 
          onClick={handleBookNowClick}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};


const StatusIcon = ({ status }) => {
  return (
    <>
      {status === 'Available' ? (
        <CheckCircle sx={{ color: 'green' }} />
      ) : (
        <Block sx={{ color: 'red' }} />
      )}
    </>
  );
};

export default RoomCard;
