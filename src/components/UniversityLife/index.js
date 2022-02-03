import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import React from 'react';
import undergraduate from '../../images/undergraduate.jpg';
import {Waypoint} from 'react-waypoint';
import robot from '../../images/ar_intel2.jpg';
import $ from 'jquery';
import './UniversityCss.css';

export default function UniversityLife(){

    return (<section id='University_Life'><Box className='route' sx={{background:'white',paddingLeft:"30px",py:'2rem'}}>
        <Typography variant='h3' sx={{paddingLeft:"15px",color:'black',mb:'2rem',fontWeight:'bold',textAlign:'center'}}>University Life</Typography>
     <Typography variant='h5' sx={{paddingLeft:"15px",color:'black',fontWeight:'bold',textAlign:'center'}}>Welcome to Addis Ababa Science and Technology University!</Typography>
     <Waypoint onEnter={()=>{
         $('.university_life_text').addClass('animate__slideInDown');
         $('.hover_effect').addClass('animate__slideInDown');
     }}/>   
    <Typography color={'#666'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'start'}} className='university_life_text animate__animated animate__delay-1s'>For most of you, University life is your first
experience to live away from family. As a result, some of you may feel that the University student
life such as loneliness, peer-group interaction etc is
challenging.</Typography>
    <Typography color={'#666'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'start'}} className='university_life_text animate__animated animate__delay-1s'>Indeed, it is not easy to miss family comfort and
cope up to a new and complex university social life. However, sooner or later you will adopt the new
environment to be independent and self-supporting
grown person, just the same way a one year child
manages to stand by her/his self and start walking. In this regard, AASTU is committed to facilitate
and support you through all of its organs not only to
adapt University life but also to fully utilize the
resources set to create a responsible and capable
citizen.</Typography>
    <Box sx={{display:{xs:'grid',md:'flex'},width:'80%',textAlign:'center',pt:'50px',margin:'auto'}}>
        <Box sx={{flexBasis:'32%',borderRadius:'10px',mb:'30px',position:'relative',overflow:'hidden'}} className='hover_effect animate__animated'>
            <img src={undergraduate} alt='color day' className='Undergradaute'/>
            <div className='layer'><h3>Undergraduate</h3></div>
        </Box>
        <Box sx={{flexBasis:'32%',borderRadius:'10px',mb:'30px',position:'relative',overflow:'hidden'}} className='hover_effect animate__animated'>
            <img src={robot} alt='culture day' />
            <div className='layer'><h3>Robotics Day</h3></div>
        </Box>
        <Box sx={{flexBasis:'32%',borderRadius:'10px',mb:'30px',position:'relative',overflow:'hidden'}} className='hover_effect animate__animated'> 
            <img src={undergraduate} alt='color day'/>
            <div className='layer'><h3>Postgraduate</h3></div>
        </Box>
    </Box>
    </Box></section>);
}

