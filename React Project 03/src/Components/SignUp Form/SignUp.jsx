import React from 'react';
import Form from 'react-bootstrap/Form';
import Styles from '../SignUp Form/SignUp.module.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const SignUp = ({func}) => {
  return (
    <div  className={`container mt-5 text-center ${Styles.main}`}>
      <h1 className='mt-5 text-center'>Sign Up</h1>

      <div className='mt-5'>
      <InputGroup className="mb-3 mt-4">
      <Form.Control type='text' placeholder="Enter Username" aria-label="Username" aria-describedby="basic-addon1" />
      </InputGroup>

      <InputGroup className="mb-3 mt-4">
        <Form.Control type='text' placeholder="Enter Email" aria-label="Username" aria-describedby="basic-addon1" />
      </InputGroup>

      <InputGroup className="mb-3 mt-4">
        <Form.Control type='password' placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1" />
      </InputGroup>

      <InputGroup className="mb-3 mt-4">
        <Form.Control type='password' placeholder="Enter Password Again" aria-label="Username" aria-describedby="basic-addon1" />
      </InputGroup>
      </div>

      <p className='mt-4'>Already have an account ? <a className='text-decoration-none' href="">Login</a></p>

      <Button onClick={func} className='mt-3' variant="secondary">Sign Up</Button>
    </div>
  )
}

export default SignUp
