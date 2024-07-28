import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Section002 from '../../assets/section02.png'

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
            <img style={{width: '100%', maxHeight: '300px'}} src={Section002} alt="" />
            </div>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <div style={{textAlign: 'left'}}>
              <h2>Mission And Vision Behind Jawan Pakistan</h2>

              <br />

              <p>Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth.</p>

              <br />

              <p>
              Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.
              </p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
