import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function FullWidthTextField() {
  return (
    <Container style={{
        width: '70%',
        height: 'auto',
        backgroundColor: '#fff',
        border: 'none',
        boxShadow: '0px 0px 10px 0px #000',
        borderRadius: '10px',
        margin: 'auto',
        marginTop: '40px'}}>
    <Box
      sx={{
        width: 700,
        maxWidth: '100%',
        margin: 'auto',
        paddingTop: '20px'
      }}
    >
      <p style={{marginBottom: '10px',color: '#718096', marginTop: '30px', fontSize: '30px'}}>Contact</p> 
      <TextField style={{marginTop: '20px'}} fullWidth label="Name" id="fullWidth" />
      <TextField style={{marginTop: '20px'}} fullWidth label="Email" id="fullWidth" />
      <TextField style={{marginTop: '20px'}} fullWidth label="Phone No" id="fullWidth" />
      <TextField style={{marginTop: '20px'}} id="outlined-multiline-flexible" label="Message" multiline maxRows={4} placeholder="Type your message here" variant="outlined" fullWidth />
      <Button style={{ marginTop: '20px', width: '100%', marginBottom: '30px'}} variant="contained" disableElevatio >
       Submit
      </Button>

    </Box>
    </Container>
  );
}

