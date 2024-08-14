import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MansData from "./MansData";
import { useNavigate } from "react-router-dom";
import Navbar from '../../Component/Navbar/Navbar';
import Footer from "../../Component/Footer/Footer";

export default function MultiActionAreaCard() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/mansinglecards/${id}`);
  };

  return (
    <>
    <Navbar />
    <div style={{display: 'flex',flexWrap: 'wrap', rowGap: '20px', columnGap: '20px',justifyContent: 'center',marginTop: '20px'}}>
      {MansData.map((e) => (
        <Card key={e.id} sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => handleCardClick(e.id)}>
            <CardMedia
              component="img"
              height="400"
              image={e.image}
              alt={e.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {e.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {e.description}
              </Typography>
              <Typography gutterBottom variant="h6" color="text.secondary">
                {e.price}
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

