import React from 'react';
import Container from '@mui/material/Container';

const Section04 = ({ cards }) => {
  return (
    <Container>
      <div>
        <p style={{color: '#006838', fontSize: '300%', fontWeight: 'bold',textAlign: 'center', marginTop: '100px'}}>IT Trainings Offering In Jawan Pakistan</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '60px'}}>
        {cards.map((card, index) => (
          <div key={index} style={{filter: 'drop-shadow(10px 10px 20px black)', border: '3px solid silver', width: '300px', height: '250px', borderRadius: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
            <img style={{ width: '100%', height: '150px', borderRadius: '30px', marginBottom: '10px' }} src={card.srcs} alt="" />
            <h3 style={{ color: '#1A202C', marginTop: '30px'}}>{card.title}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Section04;
