import React from 'react'
import Styles from './Card.module.css'

const CardSection02 = () => {
  return (
    <div class="container mt-5">
      <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <img src="src/assets/Second Card iMG.png" class="w-100 h-75" alt="" />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <h1 class="text-primary-emphasis mb-4">Welcome to <br /><span class="text-danger ">Echooling LMS Platform</span></h1>
        <h6 class="fw-bold mt-5">Education is both the act of teaching knowledge to others <br/> and <br/> the act of receiving knowledge from someone else.</h6>
        <h6 class="fw-bold mt-5">Have questions? <span class="text-danger text-decoration-underline">Get Free Guide</span></h6>
        <h6 class="fw-bold mt-5">Education also refers to the knowledge received through schooling instruction <br /> <br /> and to the institution of teaching as a whole. The main purpose of education <br /> <br /> is the integral development of a person.</h6>
        <button type="button" class="btn btn-outline-secondary w-50 mt-4">Read More <img class="text-white" src="src/assets/vector.svg" alt="" /></button>
      </div>
    </div>
    </div>
  )
}

export default CardSection02