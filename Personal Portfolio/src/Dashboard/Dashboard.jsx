import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Section01 from '../Sections/Section01/Section01';
import { Container } from 'react-bootstrap';
import SingleLine from '../Components/SingleLine/SingleLine';
import Sec02Work from '../Sections/Sec02Work/Sec02Work';
import Sec03Contact from '../Sections/Sec03Contact/Sec03Contact';
import Styles from './Dashboard.module.css';
import Icons from '../Components/Icons/Icons'

const Dashboard = () => {
  return (
    <div id="home">
      <Navbar/>
      <div style={{backgroundColor: '#323946'}}>
      <Container>
      <Section01 />
      <SingleLine lineWord= 'ABOUT'/>
      <div id="about" style={{marginTop: '20px'}}>
      <div style={{fontSize: '20px', marginBottom: '10px', marginTop: '10px',color: 'whitesmoke',textAlign: 'center'}}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse placeat quas officiis saepe, consequatur ratione modi ea, facilis sit et dolore maxime. Beatae, voluptatibus! Facere itaque, et fugiat repellendus accusantium, ex sapiente porro quos praesentium quasi sit molestiae consequuntur deserunt? Odit blanditiis pariatur neque voluptate quod magni officia quas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse placeat quas officiis saepe, consequatur ratione modi ea, facilis sit et dolore maxime. Beatae, voluptatibus! Facere itaque, et fugiat repellendus accusantium, ex sapiente porro quos praesentium quasi sit molestiae consequuntur deserunt? Odit blanditiis pariatur neque voluptate quod magni officia quas.</p>

        <div style={{textAlign: 'center'}}>
            <h1 style={{color: 'white'}}>Front-End</h1>
            <p style={{color: '#018C8D'}}>60+ Hours Experience</p>
        </div>
      </div>
      </div>
      <SingleLine lineWord= 'WORK'/>
      <Sec02Work />
      <SingleLine lineWord= 'CONTACT ME'/>
      <Sec03Contact />
      <div className={Styles.footer}>
        <div style={{textAlign: 'center'}}>
          <Icons />
        </div>

        <div style={{border: 'none', textAlign: 'center'}}>
          <p style={{color: '#9076FF'}}>Copyright © 2024 by Saifullah | All Right Reserved.</p>
        </div>
      </div>
      </Container>
      </div>
    </div>
  )
}

export default Dashboard
