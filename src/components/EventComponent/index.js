import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Waypoint } from 'react-waypoint';
import color from '../../images/color2.png';
import culture2 from '../../images/culture2.png';
import $ from 'jquery'
import './eventComp.css';

export function EventViewCard({title,image,content}) {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card sx={{ maxWidth: 345 }} className='animate__animated event'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display:"flex",justifyContent:"end"}}>
        <Typography color={'black'}>Read More</Typography>
      </CardActions>
    </Card>
  );
}
export default function EventsContainer(){
    return (<Box className='eventContainer'> 
        <Typography variant='h6' paddingLeft={'3rem'} marginBottom={'10px'}>Events in AASTU</Typography>
         <Waypoint
  onEnter={({ previousPosition, currentPosition, event })=>{
    console.log(currentPosition);
    $(".animate__animated.event").addClass("animate__bounceInUp");
  }}
   />
        <Box sx={{display:{xs:'grid',md:'flex'}}} justifyContent={'space-around'} rowGap={'2rem'}>
            <EventViewCard title="Color Day in AASTU" image={color} content="In Addis Ababa Science and Technology University, a Mid-term progress presentation workshop on determining intrinsic vulnerability and state of groundwater to contamination Awash River basin was presented to concerned authorities.The study team comprised scholars of various fields of studies from Addis Ababa Science and Technology University & Addis Ababa University"/>
            <EventViewCard title="Culture Day in AASTU" image={culture2} content="In Addis Ababa Science and Technology University, a Mid-term progress presentation workshop on determining intrinsic vulnerability and state of groundwater to contamination Awash River basin was presented to concerned authorities.The study team comprised scholars of various fields of studies from Addis Ababa Science and Technology University & Addis Ababa University"/>
            <EventViewCard title="GC Birthday in AASTU" image={color} content="In Addis Ababa Science and Technology University, a Mid-term progress presentation workshop on determining intrinsic vulnerability and state of groundwater to contamination Awash River basin was presented to concerned authorities.The study team comprised scholars of various fields of studies from Addis Ababa Science and Technology University & Addis Ababa University"/>
        </Box>
    </Box>)
}