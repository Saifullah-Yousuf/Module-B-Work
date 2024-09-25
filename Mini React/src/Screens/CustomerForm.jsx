import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { TextField, Button, Typography, Paper } from '@mui/material';
import Swal from 'sweetalert2';
import { db } from '../Config/Firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const CustomerForm = () => {
    const [customerData, setCustomerData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerData({
            ...customerData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!customerData.Name || !customerData.Email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all required fields!',
                confirmButtonText: 'OK'
            });
            return;
        }

        try {

            const querySnapshot = await getDocs(collection(db, "Customer Form"));
            const customers = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            const bookingCount = customers.filter(customer => customer.Email === customerData.Email).length;


            const bookingHistory = `Booking ${String(bookingCount + 1).padStart(2, '0')}`;


            await addDoc(collection(db, "Customers"), {
                ...customerData,
                BookingHistory: bookingHistory,
            });


            Swal.fire({
                icon: 'success',
                title: 'Customer Added!',
                text: `Customer Name: ${customerData.Name}, Booking History: ${bookingHistory}`,
                confirmButtonText: 'OK'
            });


            setCustomerData({
                Name: '',
                Email: '',
                Phone: '',
                Address: '',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Could not submit the customer data. Please try again.',
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
                    Customer Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="Name"
                        value={customerData.Name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        name="Email"
                        value={customerData.Email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Phone"
                        name="Phone"
                        value={customerData.Phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Address"
                        name="Address"
                        value={customerData.Address}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default CustomerForm;

