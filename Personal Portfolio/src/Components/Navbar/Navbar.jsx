// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-scroll';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" style={{ backgroundColor: '#343a40', padding: '10px 20px' }}>
//       <Navbar.Brand href="#home" style={{ color: '#f8f9fa', fontSize: '1.5rem', fontWeight: 'bold' }}>
//         Mr. SAIFULLAH
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'silver', color: 'silver' }} />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto" style={{ marginRight: '20px'}}>
//           <Nav.Link as={Link} to="home" spy={true} smooth={true} offset={-70} duration={500} style={{ color: '#f8f9fa', fontSize: '1rem', fontWeight: '500', margin: '0 10px' }}>
//             HOME
//           </Nav.Link>
//           <Nav.Link as={Link} to="about" spy={true} smooth={true} offset={-70} duration={500} style={{ color: '#f8f9fa', fontSize: '1rem', fontWeight: '500', margin: '0 10px' }}>
//             ABOUT
//           </Nav.Link>
//           <Nav.Link as={Link} to="contact" spy={true} smooth={true} offset={-70} duration={500} style={{ color: '#f8f9fa', fontSize: '1rem', fontWeight: '500', margin: '0 10px' }}>
//             CONTACT
//           </Nav.Link>
//           <Nav.Link as={Link} to="work" spy={true} smooth={true} offset={-70} duration={500} style={{ color: '#f8f9fa', fontSize: '1rem', fontWeight: '500', margin: '0 10px' }}>
//             WORK
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default BasicExample;



import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

function BasicExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#343a40', padding: '10px 20px' }}>
      <Navbar.Brand href="#home" style={{ color: '#f8f9fa', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Mr. SAIFULLAH
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'silver', color: 'silver' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{ marginRight: '20px'}}>
          <Nav.Link 
            as={Link} 
            to="home" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            style={{ 
              color: '#f8f9fa', 
              fontSize: '1rem', 
              fontWeight: '500', 
              margin: '0 10px', 
              cursor: 'pointer',
              position: 'relative',
            }}
            activeClass="active-link"
          >
            HOME
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            style={{ 
              color: '#f8f9fa', 
              fontSize: '1rem', 
              fontWeight: '500', 
              margin: '0 10px', 
              cursor: 'pointer',
              position: 'relative',
            }}
            activeClass="active-link"
          >
            ABOUT
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            style={{ 
              color: '#f8f9fa', 
              fontSize: '1rem', 
              fontWeight: '500', 
              margin: '0 10px', 
              cursor: 'pointer',
              position: 'relative',
            }}
            activeClass="active-link"
          >
            CONTACT
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="work" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            style={{ 
              color: '#f8f9fa', 
              fontSize: '1rem', 
              fontWeight: '500', 
              margin: '0 10px', 
              cursor: 'pointer',
              position: 'relative',
            }}
            activeClass="active-link"
          >
            WORK
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;

