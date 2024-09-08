import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StudentsTable = ({ students }) => {
  return (
    <div style={{ border: '3px solid #333333', width: '80%', height: 'auto', margin: 'auto', textAlign: 'center', marginTop: '5%', borderTopRightRadius: '30px', borderTopLeftRadius: '30px'}}>
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
        STUDENTS LIST
      </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>ID</TableCell>
              <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}} align="right">First Name</TableCell>
              <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}} align="right">Last Name</TableCell>
              <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}} align="right">Email</TableCell>
              <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}} align="right">Class Number</TableCell>
              <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}} align="right">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} component="th" scope="row">
                  {student.id} {/* Display ID */}
                </TableCell>
                <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} align="right">{student.firstName}</TableCell>
                <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} align="right">{student.lastName}</TableCell>
                <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} align="right">{student.email}</TableCell>
                <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} align="right">{student.classNumber}</TableCell>
                <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} align="right">{student.radioButtons}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentsTable;



