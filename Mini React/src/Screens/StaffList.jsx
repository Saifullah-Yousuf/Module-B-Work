import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Button, Box } from '@mui/material';
import Navbar from '../Components/Navbar';
import { db } from '../Config/Firebase'; 
import { collection, getDocs } from 'firebase/firestore';

const StaffList = () => {
    const [staffData, setStaffData] = useState([]);
    const [code, setCode] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const predefinedCode = '0000'; 

  
    useEffect(() => {
        const fetchStaffData = async () => {
            const querySnapshot = await getDocs(collection(db, "Staff"));
            const staffMembers = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setStaffData(staffMembers);
        };
        fetchStaffData();
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
                    Staff List
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
                        <Table sx={{ minWidth: 650 }} aria-label="staff table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>#</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Firebase ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Staff ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Role</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Contact Info</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Shift Timing</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {staffData.map((staff, index) => (
                                    <TableRow key={staff.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{staff.id}</TableCell> 
                                        <TableCell>{staff.StaffID}</TableCell>
                                        <TableCell>{staff.Name}</TableCell>
                                        <TableCell>{staff.Role}</TableCell>
                                        <TableCell>{staff.Department}</TableCell>
                                        <TableCell>{staff.ContactInfo}</TableCell>
                                        <TableCell>{staff.ShiftTiming}</TableCell>
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

export default StaffList;
