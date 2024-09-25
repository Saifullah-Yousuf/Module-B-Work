import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Typography, Paper } from '@mui/material';
import Swal from 'sweetalert2';
import Navbar from '../Components/Navbar';
import { db } from '../Config/Firebase'; // Update the import path if needed
import { collection, addDoc, getDocs } from 'firebase/firestore';

const BookingForm = () => {
    const [booking, setBooking] = useState({
        BookingID: '',
        CustomerID: '',
        RoomID: '',
        BookingDate: '',
        CheckInDate: '',
        CheckOutDate: '',
        Status: 'Pending'
    });

    const [bookingList, setBookingList] = useState([]);


    useEffect(() => {
        const fetchBookings = async () => {
            const querySnapshot = await getDocs(collection(db, "Booking Form"));
            const bookings = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setBookingList(bookings);
        };
        fetchBookings();
    }, []);

    useEffect(() => {
        setBooking({
            BookingID: '',
            CustomerID: '',
            RoomID: '',
            BookingDate: '',
            CheckInDate: '',
            CheckOutDate: '',
            Status: 'Pending'
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBooking({ ...booking, [name]: value });
    };

    const handleButtonClick = async (e) => {
        e.preventDefault();
        const { CustomerID, RoomID, BookingDate, CheckInDate, CheckOutDate } = booking;


        if (!CustomerID || !RoomID || !BookingDate || !CheckInDate || !CheckOutDate) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the required fields!',
                confirmButtonText: 'OK'
            });
            return;
        }

        const newBookingID = String(bookingList.length + 1).padStart(2, '0');


        try {
            await addDoc(collection(db, "Booking Form"), {
                BookingID: newBookingID,
                CustomerID,
                RoomID,
                BookingDate,
                CheckInDate,
                CheckOutDate,
                Status: 'Pending'
            });


            Swal.fire({
                icon: 'success',
                title: 'Booking Submitted!',
                text: `Customer ID: ${CustomerID}`,
                confirmButtonText: 'OK'
            });


            setBooking({
                BookingID: '',
                CustomerID: '',
                RoomID: '',
                BookingDate: '',
                CheckInDate: '',
                CheckOutDate: '',
                Status: 'Pending'
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Could not submit the booking. Please try again.',
                confirmButtonText: 'OK'
            });
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div>
            <Navbar />
            <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Booking Form
                </Typography>
                <form onSubmit={handleButtonClick}>
                    <TextField
                        label="Customer ID"
                        name="CustomerID"
                        value={booking.CustomerID}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Room ID"
                        name="RoomID"
                        value={booking.RoomID}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Booking Date"
                        type="date"
                        name="BookingDate"
                        value={booking.BookingDate}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Check-In Date"
                        type="date"
                        name="CheckInDate"
                        value={booking.CheckInDate}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Check-Out Date"
                        type="date"
                        name="CheckOutDate"
                        value={booking.CheckOutDate}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        select
                        label="Status"
                        name="Status"
                        value={booking.Status}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Confirmed">Confirmed</MenuItem>
                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                    </TextField>
                    <Button 
                        variant="contained" 
                        color="primary"
                        type="submit"
                        style={{ marginTop: '20px' }}
                    >
                        Submit Booking
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default BookingForm;
