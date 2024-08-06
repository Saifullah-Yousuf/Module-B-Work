import React from "react";
import Product from "../../Components/Product";
import { useParams } from "react-router-dom";
import { colors, Container } from "@mui/material";
import Button from '@mui/material/Button';
import Aleartt from '../../Components/Aleartt/Aleartt';
import NavBar from '../../Components/Navbar/Navbar';

const SingleCard = () => {
  console.log(Product);
  const { id } = useParams();
  const FilterProducts = Product.filter((e) => {
    return e.id == id;
  });
  console.log(FilterProducts);
  return (
    <>
    <NavBar />
    <Container>
      <h1 style={{marginTop: '10px',marginBottom: '10px'}}>Click To Buy</h1>
      {FilterProducts.map((singleData) => {
        return (
           <div style={{border: '3px solid black',width: '100%',height: 'auto',margin: 'auto',borderRadius: '10px',textAlign: 'center'}}>
            <img style={{width: '50%', textAlign: 'start', height: '300px',marginTop:'5px'}} src={singleData.image} alt="" />
            <h1 style={{marginTop: '10px',marginBottom: '10px'}}>{singleData.title}</h1>
            <p style={{marginTop: '10px',marginBottom: '10px',fontSize: '20px'}}>{singleData.description}</p>
            <div style={{textAlign: 'center'}}>
            <Button style={{textAlign: 'centwe',width: '75%',marginTop: '10px',marginBottom: '10px',backgroundColor: 'rgba(63, 81, 181, 1.5)'}} variant="contained"  disableElevation><Aleartt /></Button>
            </div>
          </div>
        );
      })}
    </Container>
    </>
  );
};

export default SingleCard;