import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { db } from '../Config/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Box } from '@mui/material';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [filterEmail, setFilterEmail] = useState('');
    const [code, setCode] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const predefinedCode = '0000';

    useEffect(() => {
        const fetchCustomers = async () => {
            const querySnapshot = await getDocs(collection(db, "Customers"));
            const customerList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setCustomers(customerList);
        };

        fetchCustomers();
    }, []);


    const filteredCustomers = customers.filter(customer => 
        customer.Email.toLowerCase().includes(filterEmail.toLowerCase())
    );


    const getBookingCount = (email) => {
        return customers.filter(customer => customer.Email === email).length;
    };


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
                    Customer List
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
                    <>
                        <TextField
                            label="Filter by Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={filterEmail}
                            onChange={(e) => setFilterEmail(e.target.value)}
                        />
                        <TableContainer component={Paper} sx={{ mt: 4 }}>
                            <Table sx={{ minWidth: 650 }} aria-label="customer table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' }}>#</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Customer ID</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Booking History</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredCustomers.map((customer, index) => (
                                        <TableRow key={customer.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{customer.id}</TableCell>
                                            <TableCell>{customer.Name}</TableCell>
                                            <TableCell>{customer.Email}</TableCell>
                                            <TableCell>{customer.Phone}</TableCell>
                                            <TableCell>{customer.Address}</TableCell>
                                            <TableCell>{getBookingCount(customer.Email)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                )}
            </div>
        </>
    );
};

export default CustomerList;
