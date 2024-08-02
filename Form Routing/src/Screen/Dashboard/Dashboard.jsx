import React from 'react';
import { Container } from 'react-bootstrap';
import Immg from '../../assets/dashboard img.jpg'

const Dashboard = () => {
  return (
    <Container>
      <img style={{width: '100%'}} src={Immg} alt="" />
    </Container>
  )
}

export default Dashboard
