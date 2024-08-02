import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LoginImgg from '../../../src/assets/login img.jpg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const [Input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        number: '',
    })

    const changeAll = (event) =>{
        const {name, value} = event.target;

        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
          }));
    }

    const clickBtn = ()=>{
        localStorage.setItem("Users", JSON.stringify(Input));
        navigate('/login');

        console.log(Input);
    }

    const paraa = ()=>{
        navigate('/login');
    }

  return (
    <div style={{border: '5px solid blue',borderRadius: '20px',margin: 'auto',width: '50%',height: '300%',marginTop: '5%',textAlign: 'center',backgroundImage: `url(${LoginImgg})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',filter: 'drop-shadow(20px 20px 20px #BECCCD)'}}>
        <h1 style={{paddingTop: '30px'}}>Sign Up</h1>

        <div style={{paddingTop: '30px',display: 'flex',justifyContent: 'space-around'}}>
            <input
            name='firstName'
            value={Input.firstName}
            onChange={changeAll}
            autoComplete='off'

            style={{width: '45%',fontSize: '20px',padding: '10px',borderRadius: '10px'}} placeholder='First Name' type="text"/>

            <input
            name='lastName'
            value={Input.lastName}
            onChange={changeAll}
            autoComplete='off'

            style={{width: '45%',fontSize: '20px',padding: '10px',borderRadius: '10px'}} placeholder='Last Name' type="text"/>
        </div>

        <div style={{paddingTop: '5%'}}> 
            <input
            name='email'
            value={Input.email}
            onChange={changeAll}
            autoComplete='off'

            style={{width: '95%',fontSize: '20px',padding: '10px',borderRadius: '10px'}} placeholder='Email' type="email" />
        </div>

        <div style={{paddingTop: '5%'}}> 
            <input
            name='password'
            value={Input.password}
            onChange={changeAll}
            autoComplete='off'

            style={{width: '95%',fontSize: '20px',padding: '10px',borderRadius: '10px'}} placeholder='Password' type="password" />
        </div>

        <div style={{paddingTop: '5%'}}> 
            <input
            name='number'
            value={Input.number}
            onChange={changeAll}
            autoComplete='off'

            style={{width: '95%',fontSize: '20px',padding: '10px',borderRadius: '10px'}} placeholder= 'Phone Number' type="number" />
        </div>

        <div>
        <Button onClick={clickBtn} style={{width: '75%',marginTop: '4%'}} variant="outlined">Sign Up</Button>
        <p onClick={paraa} style={{marginTop: '5%'}}>Don't have an account? <span style={{color: 'blue', cursor: 'pointer'}}>Login</span></p>
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

export default SignUp
