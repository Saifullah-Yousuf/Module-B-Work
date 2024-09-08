import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: '#003366',
  color: 'white',
  '&:hover': {
    backgroundColor: '#002244',
  },
});

export default function BasicButtons({ btnname, onClick }) {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton variant="contained" onClick={onClick}>
        {btnname}
      </CustomButton>
    </Stack>
  );
}
