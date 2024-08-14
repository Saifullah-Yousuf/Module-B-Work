import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


import PaypalImg from '../../assets/footer01.png';
import VisaImg from '../../assets/footer02.png';
import MastercardImg from '../../assets/footer03.png';
import SafePayImg from '../../assets/footer04.png';
import AmexImg from '../../assets/footer05.png';

const Footer = () => {
  return (
    <>
      <div style={{
        width: '100%',
        height: 'auto',
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
      }}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{ marginBottom: '20px' }}>
            <h2>Contact us</h2>
            <p><FaMapMarkerAlt style={{ marginRight: '8px' }} />Sapphire Retail Head Office 1.5-Km, Defence Road, Bhobtian Chowk, Off Raiwind Road, Opposite University of Lahore, Lahore.</p>
            <p><FaEnvelope style={{ marginRight: '8px' }} />wecare@sapphireonline.pk</p>
            <p><FaPhoneAlt style={{ marginRight: '8px' }} />+92(0)42 111-738-245</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <h2>Newsletter Signup</h2>
            <p>Subscribe to our Newsletter for Exclusive Updates</p>
            <InputGroup className="mb-3" style={{ maxWidth: '400px' }}>
              <Form.Control
                placeholder="Enter your email"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
                style={{
                  borderRadius: '20px 0 0 20px',
                  borderColor: '#ced4da',
                  padding: '10px 15px',
                }}
              />
              <Button 
                variant="primary" 
                id="button-addon2" 
                style={{
                  borderRadius: '0 20px 20px 0',
                  backgroundColor: '#007bff',
                  borderColor: '#007bff',
                  padding: '10px 20px',
                }}
              >
                Send
              </Button>
            </InputGroup>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <FaFacebookF style={{ margin: '0 10px', fontSize: '24px', color: '#4267B2', cursor: 'pointer' }} />
              <FaInstagram style={{ margin: '0 10px', fontSize: '24px', color: '#E1306C', cursor: 'pointer' }} />
              <FaYoutube style={{ margin: '0 10px', fontSize: '24px', color: '#FF0000', cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{
        width: '100%',
        height: 'auto',
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
      }}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p>© COPYRIGHT 2024 SAPPHIRE</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={PaypalImg} alt="PayPal" style={{ margin: '0 10px', width: '50px' }} />
            <img src={VisaImg} alt="Visa" style={{ margin: '0 10px', width: '50px' }} />
            <img src={MastercardImg} alt="Mastercard" style={{ margin: '0 10px', width: '50px' }} />
            <img src={SafePayImg} alt="SafePay" style={{ margin: '0 10px', width: '50px' }} />
            <img src={AmexImg} alt="Amex" style={{ margin: '0 10px', width: '50px' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
