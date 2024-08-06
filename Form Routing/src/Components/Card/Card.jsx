import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MultiActionAreaCard({idd, hading, immg, decs}) {
  const navigate = useNavigate();
  const Btnn = ()=>{
    navigate(`/singlecard/${idd}`);
  }

  return (
    <Container style={{textAlign: 'center',marginTop: '30px', height:'400px',width: '100%'}}>
        <Card>
      <div>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={immg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {hading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {decs}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div style={{textAlign: 'center',width: '100%',marginBottom: '10px'}}>
        <Button onClick={Btnn} style={{width: '100%'}} variant="contained" disableElevation>Add</Button>
        </div>
      </CardActions>
      </div>
    </Card>
    </Container>
  );
}

