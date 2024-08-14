import React from 'react';
import { useParams } from 'react-router-dom';
import WomenData from './WomenData';
import Navbar from '../../Component/Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Footer from '../../Component/Footer/Footer';

const WomenSingleCards = () => {
  const { id } = useParams();

  const FilterWomenData = WomenData.filter((e) => {
    return e.id == id;
  });
  console.log(FilterWomenData);

  const Click = ()=>{
    alert("Your Order Has Been DONE..")
  }
  return (
    <div style={{border: 'none',width: '100%',height: 'auto'}}>
      <Navbar />
      {
        FilterWomenData.map((e)=>{
          return(
            <div style={{border: 'none', width: '90%',margin: 'auto',borderRadius: '20px'}}>
              <img style={{width: '100%',height: '600px',marginTop: "10px",borderRadius: '30px'}} src={e.image} alt="" />
              <div style={{textAlign: 'center'}}>
              <h1 style={{marginTop: '10px'}}>{e.title}</h1>
              <span style={{fontSize: '20px'}}>
              <p>{e.description}</p>
              <p>RS {e.price}</p>
              </span>
              <Button  onClick={Click} variant="dark">Buy Now</Button>
              </div>
            </div>
          )
        })
      }

      <Footer />
    </div>
  )
}

export default WomenSingleCards