import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
  '& .MuiInput-underline:before': {
    borderBottomColor: '#333', 
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: '#333', 
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#333', 
  },
  '& .MuiInputLabel-root': {
    color: '#333', 
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#333',
  },
});

export default function BasicTextFields({ name, types , onChange, value }) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '80%' } }}
      noValidate
      autoComplete="off"
    >
      <CustomTextField
        style={{ marginTop: '10px', marginBottom: '10px' }}
        type={types}
        id="standard-basic"
        label={name}
        variant="standard"
        onChange={onChange}    
        value={value}       
      />
    </Box>
  );
}

