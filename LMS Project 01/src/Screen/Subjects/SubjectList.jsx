import React, { useEffect, useState } from 'react';
import { db } from "../../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function SubjectList() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Add Subject"));
        const subjectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRows(subjectsData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchSubjects();
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
        SUBJECT LIST
    </p>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , marginTop: '30px'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>ID</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}}>Name</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}} align="right">Father Name</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}} align="right">Subject</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}} align="right">Class</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'cursive', color: '#333333'}} align="right">Group</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} component="th" scope="row">{row.id}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}}>{row.name}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} align="right">{row.fatherName}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} align="right">{row.subject}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} align="right">{row.classNumber}</TableCell>
              <TableCell sx={{fontSize: '17px', fontFamily: 'cursive', color: '#333333'}} align="right">{row.radioButtons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}