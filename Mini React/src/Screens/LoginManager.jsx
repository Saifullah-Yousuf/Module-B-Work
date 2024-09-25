import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { db } from '../Config/Firebase'; 
import { collection, addDoc } from 'firebase/firestore';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import Swal from 'sweetalert2';

const LoginManager = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await addDoc(collection(db, 'ManagerList'), {
        name: name,
        password: password,
        email: email,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });

  
      Swal.fire({
        title: 'Success!',
        text: `Data has been submitted successfully. Password is: 0000.`,
        icon: 'success',
        confirmButtonText: 'OK',
      });


      setName('');
      setPassword('');
      setEmail('');
    } catch (error) {
      console.error('Error adding document: ', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error submitting your data.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div>
      <Navbar />
      <Paper elevation={3} sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
        <Typography variant="h4" align="center" sx={{ mb: 2 }}>Login Manager</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: 'black',
              color: 'silver',
              '&:hover': {
                backgroundColor: 'gray',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default LoginManager;
