import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
}));

export default function BasicSelect() {
  const [training, setTraining] = React.useState('');

  const handleChange = (event) => {
    setTraining(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Trainings</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={training}
          label="Trainings"
          onChange={handleChange}
          input={<CustomOutlinedInput />}
        >
          <MenuItem value={10}>Web and Mobile Application Development</MenuItem>
          <MenuItem value={20}>Flutter Application Development</MenuItem>
          <MenuItem value={30}>Graphic Design and Video Editing</MenuItem>
          <MenuItem value={40}>Digital and Social Media Marketing</MenuItem>
          <MenuItem value={50}>Blockchain Development</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

