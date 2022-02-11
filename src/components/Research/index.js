import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import "animate.css/animate.min.css";
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import Lottie from 'react-lottie';
import React from 'react';
import researchAnime from '../../Animation/research.json'

export default function Research(){
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: researchAnime,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (<section id='Research'><Box className='route' sx={{background:'white',paddingLeft:"30px",py:'2rem',position:'relative',pb:'100px'}}>
        <Typography variant='h3' sx={{paddingLeft:"15px",color:'black',mb:'2rem',fontWeight:'bold',textAlign:'center'}}>Research in AASTU</Typography>
        <Box sx={{display:{xs:'grid',md:'flex'}}}>
          <Box sx={{flexBasis:'48%'}}>
         <Lottie 
	        options={defaultOptions}
          height={400}
          width={400}
        />
        </Box>
        <Box sx={{flexBasis:"48%",display:'grid'}} className='research_text animate__animated animate__delay-1s'>
        <div style={{height:'15rem',background:'black',paddingTop:'2rem',display:'inline-block',width:'38%',paddingRight:'110px',alignSelf:'center',position:'absolute'}} className='researchContent animate__animated animate__delay-2s'>
    <Typography color={'white'}  sx={{paddingLeft:"35px",paddingBottom:'15px',paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'justify'}}>The Artificial Intelligence and Robotics is one of the centers of excellence
     which is identified by
     the ministry of science and technology to be established in Addis Ababa Science and Technology University.</Typography>
     </div>   
     <div style={{height:"17rem",zIndex:'9',background:"#1067cc",width:'100px',display:'inline-block',textAlign:'center',alignSelf:'center',marginLeft:'85%'}} className='researchTitle animate__animated animate__delay-1s'><p style={{fontWeight:'bold',fontFamily:'roboto',paddingInline:'0.5rem',paddingTop:'7rem'}}>Research</p></div>
    </Box>
    <Waypoint onEnter={()=>{
          $('.researchTitle').addClass('animate__slideInRight');
          $('.researchContent').addClass('animate__slideInRight');
        }}/>
    </Box>
    </Box></section>);
}