import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import Swal from 'sweetalert2';
import Navbar from '../Components/Navbar';
import { db } from '../Config/Firebase'; 
import { collection, addDoc, getDocs } from 'firebase/firestore';

const StaffForm = () => {
    const [staff, setStaff] = useState({
        StaffID: '',
        Name: '',
        Role: '',
        Department: '',
        ContactInfo: '',
        ShiftTiming: ''
    });

    const [staffList, setStaffList] = useState([]);


    useEffect(() => {
        const fetchStaff = async () => {
            const querySnapshot = await getDocs(collection(db, "Staff"));
            const staffMembers = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setStaffList(staffMembers);
        };
        fetchStaff();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStaff({ ...staff, [name]: value });
    };

    const handleButtonClick = async (e) => {
        e.preventDefault();
        const { Name, Role, Department, ContactInfo, ShiftTiming } = staff;

        if (!Name || !Role || !Department || !ContactInfo || !ShiftTiming) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the required fields!',
                confirmButtonText: 'OK'
            });
            return;
        }

        const newStaffID = String(staffList.length + 1).padStart(2, '0');

        try {
            await addDoc(collection(db, "Staff"), {
                StaffID: newStaffID,
                Name,
                Role,
                Department,
                ContactInfo,
                ShiftTiming
            });

            Swal.fire({
                icon: 'success',
                title: 'Staff Added!',
                text: `Name: ${Name}`,
                confirmButtonText: 'OK'
            });

            setStaff({
                StaffID: '',
                Name: '',
                Role: '',
                Department: '',
                ContactInfo: '',
                ShiftTiming: ''
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Could not add the staff. Please try again.',
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
                    Staff Form
                </Typography>
                <form onSubmit={handleButtonClick}>
                    <TextField
                        label="Name"
                        name="Name"
                        value={staff.Name}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Role"
                        name="Role"
                        value={staff.Role}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Department"
                        name="Department"
                        value={staff.Department}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Contact Info"
                        name="ContactInfo"
                        value={staff.ContactInfo}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Shift Timing"
                        name="ShiftTiming"
                        value={staff.ShiftTiming}
                        onChange={handleChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        type="submit"
                        style={{ marginTop: '20px' }}
                    >
                        Add Staff
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default StaffForm;