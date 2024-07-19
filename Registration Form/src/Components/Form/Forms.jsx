import React, { useState } from 'react';
import Styles from './Forms.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Forms = () => {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    orgname: "",
    orgsize: "",
    industry: "",
    checkkbox: false
  });

  const [records, setrecords] = useState([]);

  function samefunction(event){
    const name = event.target.name;
    const value = event.target.type === 'checkbox'? event.target.checked : event.target.value;

    setdata({
      ...data,
      [name]: value
    });
  };

  function Clickbtn(e){
    e.preventDefault();
    console.log(data);

    const newRecod = {...data, id: new Date().getTime().toString()}
    setrecords([...records, newRecod]);
  };

  return (
  <div className='container'>
    <h1 className='text-center mt-5'>Register Now</h1>
    <form className={`mt-5 ${Styles.main}`}>
      <div className="form-group mt-5 p-3">
        <div className="row">
          <div className="col-md-6">
            <label><h3>First Name</h3></label>
            <input onChange={samefunction} autoComplete='off' name='firstname' type="text" className="form-control mt-2" placeholder="John
            " />
          </div>

          <div className="col-md-6">
            <label ><h3>Last Name</h3></label>
            <input onChange={samefunction} autoComplete='off' name='lastname' type="text" className="form-control mt-2" placeholder="Deo
            " />
          </div>
        </div>

        <div>
          <label className='mt-4'><h3>Work Email</h3></label>
          <input onChange={samefunction} autoComplete='off'  name='email' type="email" className="form-control mt-2" id="email" placeholder="john@deo.com
          " />

          <label className='mt-4'><h3>Password</h3></label>
          <input onChange={samefunction} autoComplete='off' name='password' type="password" className="form-control mt-2" id="password" placeholder=
          "Password" />

          <label className='mt-4'><h3>Organization Name</h3></label>
          <input onChange={samefunction} autoComplete='off' name='orgname' type="text" className="form-control mt-2" id="organizationName" placeholder=
          "ABC Organization" />

          <label className='mt-4'><h3>Organization Size</h3></label>
          <InputGroup className="mt-1">
          <Form.Control onChange={samefunction} name='orgsize' placeholder="-- Select --" aria-label="Text input with dropdown button" />

          <DropdownButton variant="btn btn-light" id="input-group-dropdown-2" align="end" >
            <Dropdown.Item href="#" onChange={samefunction}>Organization Size 01</Dropdown.Item>
            <Dropdown.Item href="#" onChange={samefunction}>Organization Size 02</Dropdown.Item>
            <Dropdown.Item href="#" onChange={samefunction}>Organization Size 03</Dropdown.Item>
          </DropdownButton>
          </InputGroup>

          <label className='mt-4'><h3>Industry</h3></label>
          <InputGroup className="mt-1">
          <Form.Control onChange={samefunction} name='industry' placeholder="-- Select --" aria-label="Text input with dropdown button" />

          <DropdownButton variant="btn btn-light" id="input-group-dropdown-2" align="end" >
            <Dropdown.Item onChange={samefunction} href="#">Industry 01</Dropdown.Item>
            <Dropdown.Item onChange={samefunction} href="#">Industry 02</Dropdown.Item>
            <Dropdown.Item onChange={samefunction} href="#">Industry 03</Dropdown.Item>
          </DropdownButton>
          </InputGroup>

          <div className={`mt-5`}>
          <h6>Formstack has updated our Terms of Service effective Jaunary 4, 2023. <br /> We encourage you to read the document in its entirety.</h6>
          </div>

          <div className={`mt-5`}>
          <h6><input onChange={samefunction} type="checkbox" name='checkkbox' /> I Understand and agree of the <span className='text-decoration-underline text-primary opacity-75'>Formstack Privacy Policy</span> , <span className='text-decoration-underline text-primary opacity-75'>Software Services Agreement </span>, and <span className='text-decoration-underline text-primary opacity-75'>Acceptable Use Policy</span>.</h6>
          </div>

          <Button onClick={Clickbtn} className='w-100 mt-4' variant="primary" size="lg">Start free trial</Button>
        </div>
      </div>
    </form>

    {
      records.map((currentVal)=>{
        return(
          <div className={`container `}>
              <div className={` ${Styles.ans}`}>
                <div className='text-center'>
                  <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                    <h4 className={Styles.ansVal}>First Name: {currentVal.firstname}</h4>
                  </div>

                  <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                    <h4 className={Styles.ansVal}>Last Name: {currentVal.lastname}</h4>
                  </div>

                  <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                    <h4 className={Styles.ansVal}>Email: {currentVal.email}</h4>
                  </div>

                  <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                    <h4 className={Styles.ansVal}>Password: {currentVal.password}</h4>
                  </div>

                  <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                    <h4 className={Styles.ansVal}>Organization Name: {currentVal.orgname}</h4>
                  </div>

                  <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                    <h4 className={Styles.ansVal}>Organization Size: {currentVal.orgsize}</h4>
                  </div>

                  <div className='col-12 col-lg-4 col-md-3 col-sm-12'>
                    <h4 className={Styles.ansVal}>Industry: {currentVal.checkkbox}</h4>
                  </div>
                </div>
              </div>
          </div>
        )
      })
    }
  </div>
  )
}

export default Forms