import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SirAli from '../../assets/SirAli.jpg';
import Linee from '../../assets/line.png';
import Coma from '../../assets/coma.png'

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
      <Grid rowSpacing={1}>
        <Grid item xs={12}>
          <Item>
            <div>
            <img style={{width: '100%', maxHeight: '300px', border: 'none', borderRadius: '50%', width: '30%', textAlign: 'center', marginBottom: '10px'}} src={SirAli} alt="" />
            </div>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <div style={{textAlign: 'center'}}>
              <img style={{marginTop: '20px'}} src={Linee} alt="" />

              <p style={{fontSize: '300%', fontWeight: 'bold', color: '#006838'}}>MUHAMMAD ALI MUGHAL</p>

              <br />

              <p style={{fontSize: '140%', color: '#CBD5E0'}}>Founder of Jawan Pakistan</p>

              <br />

              <img src={Coma} alt="" />

              <br />

              <p style={{margin: '14px', marginTop: '0px', fontSize: '140%', color: '#718096', marginTop: '20px'}}>
              We aim to be most efficient provider of business process outsourcing services by setting the industry standards for cost and quality of services. Our long term success will be driven by our relentless focus on recruiting and developing the most talented pool of human capital in our industry.
              </p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
