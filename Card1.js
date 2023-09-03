import React from 'react'
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export function Card1({detail}) {
  return (
    <div className='card-container'>
      <div>
    <br />
    <Card sx={{ maxWidth: 300,height:300}}>
      <CardMedia
        component="img"
        alt="c"
        height="140"
        image={detail.poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {detail.course}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="warning" size="small">
          Enroll now
        </Button>
      </CardActions>
    </Card>
    </div>
  </div>
  )
}

