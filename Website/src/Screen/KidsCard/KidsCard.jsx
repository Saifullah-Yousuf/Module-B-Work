import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import KidsData from "./KidsData";
import { useNavigate } from "react-router-dom";
import Navbar from '../../Component/Navbar/Navbar';
import Footer from "../../Component/Footer/Footer";

export default function MultiActionAreaCard() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/kidssinglecards/${id}`);
  };

  return (
    <>
    <Navbar />
    <h1>Kids</h1>
    <div style={{display: 'flex',flexWrap: 'wrap', rowGap: '20px', columnGap: '20px',justifyContent: 'center',marginTop: '20px'}}>
      {KidsData.map((e) => (
        <Card key={e.id} sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => handleCardClick(e.id)}>
            <CardMedia
              component="img"
              height="400"
              image={e.image}
              alt={e.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {e.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {e.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rs {e.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>

    <Footer />
    </>
  );
}