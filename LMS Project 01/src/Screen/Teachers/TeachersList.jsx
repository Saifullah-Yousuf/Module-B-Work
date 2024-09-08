import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { db } from "../../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";

export default function TeacherList() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Teacher Regis"));
        const teachersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRows(teachersData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ border: '3px solid #333333', width: '80%', height: 'auto', margin: 'auto', textAlign: 'center', marginTop: '5%', borderTopRightRadius: '30px', borderTopLeftRadius: '30px' }}>
      <p
        style={{
          fontSize: "30px",
          fontStyle: "italic",
          fontWeight: "bold",
          textDecoration: "underline",
          marginTop: "15px",
          marginBottom: "10px",
          color: "#003366",
        }}
      >
        TEACHER LIST
      </p>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>First Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>Last Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>Class Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive' }} component="th" scope="row">{row.id}</TableCell>
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive', color: '#333333' }}>{row.firstName}</TableCell>
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive', color: '#333333' }}>{row.lastName}</TableCell>
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive', color: '#333333' }}>{row.email}</TableCell>
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive', color: '#333333' }}>{row.classNumber}</TableCell>
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive', color: '#333333' }}>{row.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
