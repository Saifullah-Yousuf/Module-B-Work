import React from 'react';
import { useParams } from 'react-router-dom';
import KidsData from './KidsData';
import Navbar from '../../Component/Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Footer from '../../Component/Footer/Footer';

const KidsSingleCards = () => {
  const { id } = useParams();

  const FilterKidsData = KidsData.filter((e) => {
    return e.id == id;
  });
  console.log(FilterKidsData);

  const Click = ()=>{
    alert("Your Order Has Been DONE..")
  }
  return (
    <div style={{border: 'none',width: '100%',height: 'auto'}}>
      <Navbar />
      {
        FilterKidsData.map((e)=>{
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

export default KidsSingleCards