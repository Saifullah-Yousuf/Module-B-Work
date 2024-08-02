import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LoginImgg from '../../../src/assets/login img.jpg';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [Input, setInput] = useState({
    email: '',
    password: '',
  });

  const changeInput = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const clickBtn = () => {
    const LogData = JSON.parse(localStorage.getItem("Users"));

    if(Input.email === LogData.email && Input.password === LogData.password){
      navigate('/dashboard')
      alert("Login Success");
    }else{
      alert("Invalid Email or Password");
    }

    console.log(Input)
  }

  const paraa = ()=>{
    navigate('/signup');
}

  return (
    <div style={{border: '5px solid blue',borderRadius: '20px',margin: 'auto',width: '50%',height: '300%',marginTop: '5%',textAlign: 'center',backgroundImage: `url(${LoginImgg})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',filter: 'drop-shadow(20px 20px 20px #BECCCD)'}}>
        <h1 style={{paddingTop: '30px'}}>Login</h1>

        <div style={{paddingTop: '30px'}}>
            <input name= "email" value={Input.email} onChange={changeInput} autoComplete='off'
            
            style={{width: '75%',fontSize: '20px',padding: '10px',borderRadius: '10px'}} placeholder='Email' type="email"/>
        </div>

        <div style={{paddingTop: '5%'}}> 
            <input name= "password" value={Input.password} onChange={changeInput} autoComplete='off'
            
            style={{width: '75%',fontSize: '20px',padding: '10px',borderRadius: '10px'}} placeholder='Password' type="password" />

            <p style={{color: 'blue',marginTop: '2%'}}>Forget Password</p>
        </div>

        <div>
        <Button onClick={clickBtn} style={{width: '37.5%',marginTop: '4%'}} variant="outlined">Login</Button>
        <p onClick={paraa} style={{marginTop: '5%', cursor: 'pointer'}}>Don't have an account? <span style={{color: 'blue'}}>Signup</span></p>
        </div>

        <p style={{marginTop: '5%'}}>---------------------------------OR---------------------------------</p>

        <div>
        <Button startIcon={<FacebookOutlinedIcon />} style={{width: '40%',marginTop: '4%'}} variant="outlined">Login with Facebook</Button>
        </div>

        <div>
        <Button startIcon={<GoogleIcon />} style={{width: '40%',marginTop: '4%',marginBottom: '4%'}} variant="outlined">Login with Google</Button>
        </div>
    </div>
  )
}

export default Login
