import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import aastu from '../../images/aastuImage.jpg';
import aastu2 from '../../images/aastu2.jpg';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery'
import './newsComp.css';

export function NewsViewCard({title,image,content}) {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card sx={{ maxWidth: 345 }} className='animate__animated news'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader="October 28, 2021"
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
export default function NewsContainer(){
    return (
    <div className='newsContainer'> 
        <Typography variant='h6' paddingLeft={'3rem'} marginBottom={'10px'}>Latest News</Typography>
        <Waypoint
  onEnter={()=>{
    $(".animate__animated.news").addClass("animate__bounceInUp");
  }}
   />
        <Box sx={{display:{xs:'grid',md:'flex'}}} justifyContent={'space-around'} rowGap={'2rem'}>
            <NewsViewCard title="የ10ኛ ዓመት የምስረታ በዓል አከባበር" image={aastu} content="In Addis Ababa Science and Technology University, a Mid-term progress presentation workshop on determining intrinsic vulnerability and state of groundwater to contamination Awash River basin was presented to concerned authorities.The study team comprised scholars of various fields of studies from Addis Ababa Science and Technology University & Addis Ababa University"/>
            <NewsViewCard title="Mid-term progress presentation" image={aastu2} content="In Addis Ababa Science and Technology University, a Mid-term progress presentation workshop on determining intrinsic vulnerability and state of groundwater to contamination Awash River basin was presented to concerned authorities.The study team comprised scholars of various fields of studies from Addis Ababa Science and Technology University & Addis Ababa University"/>
            <NewsViewCard title="2014 E.C. AASTU Graduation Day" image={aastu} content="In Addis Ababa Science and Technology University, a Mid-term progress presentation workshop on determining intrinsic vulnerability and state of groundwater to contamination Awash River basin was presented to concerned authorities.The study team comprised scholars of various fields of studies from Addis Ababa Science and Technology University & Addis Ababa University"/>
        </Box>
    </div>)
}