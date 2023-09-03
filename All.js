import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Card1} from "./Card1";
import {data} from "./App";


export function All() {
  return (
   <div className="all-container">
    {data.map((dt,index)=>(
      <Card1 detail={dt}  key={index}/>
    ))}
   </div>
  );
}
