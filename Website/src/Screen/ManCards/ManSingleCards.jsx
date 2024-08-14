import React from 'react';
import { useParams } from 'react-router-dom';
import MansData from './MansData';
import Navbar from '../../Component/Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Footer from '../../Component/Footer/Footer';

const ManSingleCards = () => {
  const { id } = useParams();

  const FilterMansData = MansData.filter((e) => {
    return e.id == id;
  });
  console.log(FilterMansData);

  const Click = ()=>{
    alert("Your Order Has Been DONE..")
  }
  return (
    <div style={{border: 'none',width: '100%',height: 'auto'}}>
      <Navbar />
      {
        FilterMansData.map((e)=>{
          return(
            <div style={{border: 'none', width: '90%',margin: 'auto',borderRadius: '20px'}}>
              <img style={{width: '100%',height: '300px',marginTop: "10px",borderRadius: '30px'}} src={e.image} alt="" />
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

export default ManSingleCards