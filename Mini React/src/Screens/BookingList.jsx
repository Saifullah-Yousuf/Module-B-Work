import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Button, Box } from '@mui/material';
import Navbar from '../Components/Navbar';
import { db } from '../Config/Firebase';
import { collection, getDocs } from 'firebase/firestore';

const BookingList = () => {
    const [bookingData, setBookingData] = useState([]);
    const [code, setCode] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const predefinedCode = '0000';


    useEffect(() => {
        const fetchBookingData = async () => {
            const querySnapshot = await getDocs(collection(db, "Booking Form"));
            const bookings = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setBookingData(bookings);
        };
        fetchBookingData();
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
                    Booking List
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
                        <Table sx={{ minWidth: 650 }} aria-label="booking table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>#</TableCell> 
                                    <TableCell sx={{ fontWeight: 'bold' }}>Firebase ID</TableCell> 
                                    <TableCell sx={{ fontWeight: 'bold' }}>Booking ID</TableCell> 
                                    <TableCell sx={{ fontWeight: 'bold' }}>Customer ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Room ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Booking Date</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Check-In Date</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Check-Out Date</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bookingData.map((booking, index) => (
                                    <TableRow key={booking.id}>
                                        <TableCell>{index + 1}</TableCell> 
                                        <TableCell>{booking.id}</TableCell> 
                                        <TableCell>{booking.BookingID}</TableCell> 
                                        <TableCell>{booking.CustomerID}</TableCell>
                                        <TableCell>{booking.RoomID}</TableCell>
                                        <TableCell>{booking.BookingDate}</TableCell>
                                        <TableCell>{booking.CheckInDate}</TableCell>
                                        <TableCell>{booking.CheckOutDate}</TableCell>
                                        <TableCell>{booking.Status}</TableCell>
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

export default BookingList;
