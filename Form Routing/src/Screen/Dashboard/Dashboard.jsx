import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../../Components/Card/Card';
import Product from '../../Components/Product';
import NavBar from '../../Components/Navbar/Navbar';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
  return (
    <Container>
      <NavBar />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {
          Product.map((e, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Card idd={e.id} hading={e.title} immg={e.image} decs={e.description}/>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default Dashboard;

