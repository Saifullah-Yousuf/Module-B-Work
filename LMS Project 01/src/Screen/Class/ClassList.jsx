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

const ClassList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Class Form"));
      const studentsData = querySnapshot.docs.map(doc => doc.data());
      studentsData.sort((a, b) => a.id - b.id); // Sort by ID to ensure order
      setStudents(studentsData);
    };
    fetchData();
  }, []);

  return (
    <div style={{ border: '3px solid #333333', width: '80%', height: 'auto', margin: 'auto', textAlign: 'center' , marginTop: '5%', borderTopRightRadius: '30px', borderTopLeftRadius: '30px'}}>

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
        CLASS LIST
    </p>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , marginTop: '30px'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>ID</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>First Name</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>Father Name</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>Email</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>Phone Number</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>Qualification</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>Date of Birth</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}}>{student.id}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}}>{student.firstName}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}}>{student.fatherName}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}}>{student.email}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}}>{student.phoneNumber}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}}>{student.qualification}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}}>{student.dateOfBirth}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}}>{student.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default ClassList;
