import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FootLogo from '../../assets/logotop.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Container style={{marginTop: '70px'}}>
    <hr />
    <Box sx={{ width: '100%' }}>
      <Grid style={{marginTop: '30px'}} container rowSpacing={1}>
        <Grid item xs={12} lg={4} >
          <Item>
            <div>
                <img style={{width: '50%', height: '50px', marginTop: '25px', marginBottom: '20px'}} src={FootLogo} alt="" />
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Item>
            <div style={{height: '100px'}}>
                <h3 style={{color: '#22543D'}}>COMPANY</h3>

                <a style={{color: '#38A169', textDecoration: 'none'}} href="">Home</a> <br />
                <a style={{color: '#38A169', textDecoration: 'none'}} href="">About us</a> <br />
                <a style={{color: '#38A169', textDecoration: 'none'}} href="">Trainings</a> <br />
                <a style={{color: '#38A169', textDecoration: 'none'}} href="">Contact us</a> <br />
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Item>
          <div style={{height: '100px'}}>
               <h3 style={{color: '#22543D'}}>CONTACT DETAILS</h3>

               <a style={{color: '#38A169', textDecoration: 'none'}} href="">Muhammad Ali Mughal</a> <br />
               <a style={{color: '#38A169', textDecoration: 'none'}} href="">+923005292675</a> <br />
               <a style={{color: '#38A169', textDecoration: 'none'}} href="">jawantechpk@gmail.com</a> <br />
          </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
