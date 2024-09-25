import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/Firebase'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Button, Box } from '@mui/material';
import Navbar from '../Components/Navbar';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [code, setCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const predefinedCode = '0000'; 

  
  useEffect(() => {
    const fetchPayments = async () => {
      const paymentCollection = collection(db, 'payments');
      const paymentSnapshot = await getDocs(paymentCollection);
      const paymentList = paymentSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setPayments(paymentList);
    };

    fetchPayments();
  }, []);


  const handleCodeSubmit = () => {
    if (code === predefinedCode) {
      setIsAuthorized(true);
    } else {
      alert('Invalid code! Please enter the correct 4-digit code.');
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Payment List
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom textAlign="center" color="gray">
          For Manager and Admin Only
        </Typography>

        {!isAuthorized ? (
          <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
            <TextField
              label="Enter 4-Digit Code"
              variant="outlined"
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              inputProps={{ maxLength: 4 }} 
              sx={{ mr: 2, width: '250px' }}
            />
            <Button 
              variant="contained" 
              onClick={handleCodeSubmit}
              sx={{ 
                bgcolor: 'black', 
                color: 'white', 
                '&:hover': { bgcolor: 'silver' }
              }}
            >
              Submit
            </Button>
          </Box>
        ) : (
          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table sx={{ minWidth: 650 }} aria-label="payment table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>#</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Booking ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Payment Method</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Payment Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payments.map((payment, index) => (
                  <TableRow key={payment.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{payment.BookingID}</TableCell>
                    <TableCell>{payment.Amount}</TableCell>
                    <TableCell>{payment.PaymentMethod}</TableCell>
                    <TableCell>{payment.Status}</TableCell>
                    <TableCell>{new Date(payment.PaymentDate).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
};

export default PaymentList;
