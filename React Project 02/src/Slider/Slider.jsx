import React from 'react'
import styles from './Slider.module.css'

const Slider = () => {
  return (
    <div>
      <div id="carouselExample" className={styles.main} class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className={styles.img1} src='https://echooling-react.vercel.app/static/media/1.ddb463a076b58bbe0ea3.jpg' class="d-block w-100" alt="..."  />
      <span className={styles.text01}>
      <h3 className={styles.head1}>Great Quality Cocial Life</h3>
      <h1 className='styles.heading' class="mt-4">Discover the world of possible university</h1>
      <button type="button" class="btn btn-outline-secondary w-75 mt-4">Admissions</button>
      </span>
    </div>
    <div class="carousel-item">
      <img src="https://echooling-react.vercel.app/static/media/2.924b429a0601a89b04e1.jpg" class="d-block w-100" alt="..." />
      <span className={styles.text01}>
      <h3 className={styles.head1}>Great Quality Cocial Life</h3>
      <h1 className='styles.heading' class="mt-4">Discover the world of possible university</h1>
      <button type="button" class="btn btn-outline-secondary w-75 mt-4">Admissions</button>  
      </span>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider