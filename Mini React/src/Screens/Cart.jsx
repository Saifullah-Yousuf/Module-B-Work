import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Button, Container, Paper, Box, TextField, MenuItem } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Config/Firebase'; 
import Navbar from '../Components/Navbar';
import Swal from 'sweetalert2';  

const Cart = () => {
  const location = useLocation();
  const { roomId, roomNum, BedType, status, Price } = location.state; 


  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState(Price);


  const paymentMethods = [
    { value: 'Credit Card', label: 'Credit Card' },
    { value: 'PayPal', label: 'PayPal' },
    { value: 'Bank Transfer', label: 'Bank Transfer' },
  ];


  const handleConfirmBooking = () => {
    setShowPaymentForm(true);
  };


  const handlePaymentSubmit = async () => {
    try {

      await addDoc(collection(db, 'payments'), {
        BookingID: roomId,
        Amount: amount,
        PaymentMethod: paymentMethod,
        PaymentDate: new Date().toISOString(),
        Status: 'Completed'
      });


      Swal.fire({
        title: 'Payment Successful!',
        text: `Your payment of $${amount} has been Done.`,
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {

        setShowPaymentForm(false);
      });

    } catch (error) {
      console.error('Error submitting payment:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was a problem processing your payment.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ paddingTop: '40px' }}>
        <Paper elevation={4} sx={{ padding: '30px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <Typography variant="h4" component="div" sx={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>
            Booking Details
          </Typography>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              <strong>Room ID:</strong> {roomId}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              <strong>Room Number:</strong> {roomNum}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              <strong>Bed Type:</strong> {BedType}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              <strong>Status:</strong> {status}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              <strong>Price:</strong> {Price}
            </Typography>
          </Box>

          {!showPaymentForm ? (
            <Button
              variant="contained"
              fullWidth
              sx={{ 
                padding: '12px', 
                fontSize: '16px', 
                backgroundColor: 'black', 
                color: 'silver', 
                '&:hover': { backgroundColor: '#333' } 
              }}
              onClick={handleConfirmBooking}
            >
              Confirm Booking
            </Button>
          ) : (
            <Box>
              <Typography variant="h5" sx={{ marginBottom: '10px' }}>
                Payment Form
              </Typography>

              <TextField
                fullWidth
                label="Amount"
                value={amount}
                disabled
                sx={{ marginBottom: '15px' }}
              />

              <TextField
                select
                label="Payment Method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                fullWidth
                sx={{ marginBottom: '15px' }}
              >
                {paymentMethods.map((method) => (
                  <MenuItem key={method.value} value={method.value}>
                    {method.label}
                  </MenuItem>
                ))}
              </TextField>

              <Button
                variant="contained"
                fullWidth
                sx={{ 
                  padding: '12px', 
                  fontSize: '16px', 
                  backgroundColor: 'black', 
                  color: 'silver', 
                  '&:hover': { backgroundColor: '#333' } 
                }}
                onClick={handlePaymentSubmit}
              >
                Submit Payment
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Cart;
