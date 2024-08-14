import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Categoryman from '../../assets/MenAll.avif';
import Categorywoman from '../../assets/WomenAll.avif';
import Categorykids from '../../assets/KidsAll.avif';
import { useNavigate } from 'react-router-dom';

export default function MultiActionAreaCard() {

  const Mansnavigate = useNavigate();
  const Womensnavigate = useNavigate();
  const Kidsnavigate = useNavigate();

  const Manss = ()=>{
    Mansnavigate('/mancards')
  }

  const Womens = ()=>{
    Womensnavigate('/womencards')
  }

  const Kidss = ()=>{
    Kidsnavigate('/kidscards')
  }
  return (
    <>
    <div style={{marginTop: '10px',marginBottom: '10px',textAlign: 'center'}}>
      <h1>SHOP BY CATEGORY</h1>
    </div>
    <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-evenly',marginTop: '20px',marginBottom: '20px',rowGap: '20px'}}>
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea onClick={Manss}>
        <CardMedia
          component="img"
          height="260"
          image={Categoryman}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MANS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={Womens}>
        <CardMedia
          component="img"
          height="260"
          image={Categorywoman}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WOMENS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={Kidss}>
        <CardMedia
          component="img"
          height="260"
          image={Categorykids}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            KIDS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}
