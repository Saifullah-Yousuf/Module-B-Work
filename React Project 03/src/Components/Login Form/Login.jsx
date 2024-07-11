import React from 'react';
import Styles from '../Login Form/Login.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Login = ({func}) => {
  return (
    <div className={`container text-center ${Styles.main}`}>
      <h3 className='mt-5 fw-bold'>Login</h3>

      <div className='mt-5'>
      <InputGroup className="mb-3 mt-5">
        <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </InputGroup>

      <InputGroup className="mb-3 mt-4">
        <Form.Control type='password' placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" /> 
      </InputGroup>

      <p className='text-end'>Forgot Password ?</p>

      <Button onClick={func} className='w-75 mt-4' variant="secondary" size="lg"> LOGIN </Button>
      </div>
    </div>
  )
}

export default Login
