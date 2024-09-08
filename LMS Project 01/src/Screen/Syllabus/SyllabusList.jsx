import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { db } from '../../Config/Firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function SyllabusList() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Add Syllabus"), (snapshot) => {
      const syllabusData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRows(syllabusData);
    });

    return () => unsubscribe();
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
        SYLLABUS LIST
      </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, marginTop: '30px' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>Father Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>Subject</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333' }}>Class Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive', color: '#333333' }} component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive', color: '#333333' }}>{row.name}</TableCell>
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive', color: '#333333' }}>{row.fatherName}</TableCell>
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive', color: '#333333' }}>{row.subject}</TableCell>
                <TableCell sx={{ fontSize: '17px', fontFamily: 'cursive', color: '#333333' }}>{row.classNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
