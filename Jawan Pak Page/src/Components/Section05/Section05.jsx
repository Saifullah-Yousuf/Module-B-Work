import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card01 from '../../assets/sec5 card01.jpg';
import Card02 from '../../assets/sec5 card02.jpg';
import Card03 from '../../assets/sec5 card03.jpg';
import Card04 from '../../assets/sec5 card04.jpg';
import Card05 from '../../assets/sec5 card05.jpg';
import Card06 from '../../assets/sec5 card06.jpg';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Container>
    <div>
        <p style={{color: '#006838', fontSize: '400%', fontWeight: 'bold',textAlign: 'center', marginTop: '100px'}}>Glimpses Of Sessions Conducted By Jawan Pakistan</p>
      </div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginTop={5}>
        <Grid item xs={3}>
          <Item>
            <img style={{width: '100%', minHeight: '100px', maxHeight: '400px'}} src={Card01} alt="" />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <img style={{width: '100%', minHeight: '100px', maxHeight: '300px'}} src={Card02} alt="" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <img style={{width: '100%', minHeight: '100px', maxHeight: '300px'}} src={Card03} alt="" />
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <img style={{width: '100%', minHeight: '100px', maxHeight: '300px'}} src={Card04} alt="" /></Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <img style={{width: '100%', minHeight: '100px', maxHeight: '300px'}} src={Card05} alt="" />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <img style={{width: '100%', minHeight: '100px', maxHeight: '300px'}} src={Card06} alt="" />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
