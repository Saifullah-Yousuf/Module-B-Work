import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Section001 from '../../assets/section01.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Container>
    <Box sx={{ width: '100%', marginTop: '20px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} >
          <Item > 
            <div style={{width: '100%',height: '280px',overflow: 'hidden', textAlign: 'left',margin: '1%',paddingTop: '20px'}}>
            <h2 style={{color: '#006838'}}>Introduction To Jawan Pakistan</h2>
            <p style={{color: '#7D8B9F',paddingTop: '30px'}}>
            The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth.
            </p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div>
            <img style={{width: '100%',height: '285px'}} src={Section001} alt="" />
            </div>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
    </Container>
  );
}