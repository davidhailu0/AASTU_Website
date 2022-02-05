import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import CountUp from 'react-countup';
import { Waypoint } from 'react-waypoint';
import aboutUs from '../../images/about.jpg';
import Typical from 'react-typical';
import $ from 'jquery';
import React from 'react';
import './aboutAASTU.css';

export default function AboutUs(){

    return (<section id='About_AASTU'><Box className='route' sx={{background:'white',paddingLeft:"30px",py:'2rem'}}>
        <Typical
        steps={['Welcome to Addis Ababa Science and Technology University', 'We are very happy to have you on board with us', 'Have you seen the University Life Section?','This Section is about AASTU']}
        loop={Infinity}
        wrapper="h3"
      />
        {/* <Typography variant='h3' sx={{paddingLeft:"15px",mb:"2rem",fontWeight:'bold',textAlign:'center'}}>About AASTU</Typography> */}
        <Waypoint onEnter={()=>{
          $('.aastu_text').addClass('animate__zoomIn');
          $('.about_image').addClass('animate__zoomIn');
        }}/>
        <Box sx={{display:{xs:"grid",md:"flex"}}}>
          <Box sx={{flexBasis:"48%"}} className='aastu_text animate__animated'>
      <Typography color={'#666666'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'justify'}}>The concept of Addis Ababa Science and Technology University had a direct and reasonable connection with the Five-Year Growth and Transformation Plan (2010-2015) of the government of the Federal Democratic Republic of Ethiopia. As it was stated in the plan, the establishment of well institutionalized and strong science and technology universities and institutes of technology will serve as a cornerstone to build an economically developed and industrialized state of Ethiopia. As a result, AASTU was founded in 2011 under the Directive of the Council of Ministers No. 216/2011 by admitting the first batch (2000 students) in November 2011.</Typography>
    <Typography color={'#666666'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'justify'}}>Currently, the university has enrolled more than 8000 undergraduate (under regular and continuing education program) and close to 700 postgraduate students under its nine applied sciences, technology, engineering and ICT focused schools. AASTU is a university in the making, and much of its short-term plans aim at establishing academic infrastructures and facilities, staff recruitment and manpower development. So far, we managed to recruit 472 academic staff and 391 administrative staff.</Typography>
    </Box>
    <Box sx={{flexBasis:"48%"}} className='about_image animate__animated animate__delay-1s'>
     <img src={aboutUs} alt={'abt_image'} className='aboutUs_image' style={{width:"100%"}}/>
    </Box>
        </Box>
    <Typography variant='h5' sx={{paddingLeft:"15px",py:"1rem",textAlign:'center',fontWeight:'bold'}}>AASTU in Numbers</Typography>
    <Box sx={{display:{xs:'grid',md:'flex'}}} justifyContent={'space-evenly'} rowGap={'2rem'}>
    <MyCard type={'Undergraduate'} count={8000}/>
    <MyCard type={'Postgraduate'} count={700}/>
    <MyCard type={'Academic Staff'} count={472}/>
    <MyCard type={'Administrative Staff'} count={391}/>
    </Box>
    </Box></section>);
}
export function MyCard(props){
  let count = false;
    return (<Card sx={{ width:300,height:200,display:'flex',justifyContent:'center',alignItems:'center'}} >
      <CardContent>
        <Typography sx={{ fontSize: 14,textAlign:'center' }} color="text.secondary" gutterBottom>
          {props.type}
        </Typography>
        <Typography variant="h5" component="div" sx={{color:'#1976D2',textAlign:'center'}} >
          <CountUp
  start={0}
  end={props.count}
  duration={2.75}
  separator=" "
  decimal=","
>
  {({ countUpRef, start }) => (
    <><Waypoint
  onEnter={()=>{
    if(count===false){
      start();
      count=true;
    }
  }}
   />
   <span ref={countUpRef} />
   </>
  )}
</CountUp>
        </Typography>
      </CardContent>
    </Card>)
}