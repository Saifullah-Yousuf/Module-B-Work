import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Button, Box } from '@mui/material';
import Navbar from '../Components/Navbar';
import { db } from '../Config/Firebase'; 
import { collection, getDocs } from 'firebase/firestore';

const ManagerList = () => {
  const [managerData, setManagerData] = useState([]);
  const [code, setCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const predefinedCode = '0000';

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "ManagerList"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setManagerData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCodeSubmit = () => {
    if (code === predefinedCode) {
      setIsAuthorized(true);
    } else {
      alert('Invalid code! Please enter the correct 4-digit code.');
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Manager List
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
            <Table sx={{ minWidth: 650 }} aria-label="manager table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>#</TableCell> 
                  <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {managerData.map((manager, index) => (
                  <TableRow key={manager.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{manager.id}</TableCell> 
                    <TableCell>{manager.name}</TableCell>
                    <TableCell>{manager.email}</TableCell>
                    <TableCell>{manager.date}</TableCell>
                    <TableCell>{manager.time}</TableCell>
                    <TableCell>
                      <span style={{ color: 'gray' }}>Password hidden</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default ManagerList;
