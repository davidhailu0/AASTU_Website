import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import React from 'react';


export default function Academics(){

    return (<section id='Academics'><Box className='route' sx={{background:'black',paddingLeft:"30px",py:'2rem'}}>
        <Typography variant='h3' sx={{paddingLeft:"15px",color:'white',mb:'2rem'}}>Academics</Typography>
     <Typography variant='h5' sx={{paddingLeft:"15px",color:'white'}}>Welcome to Addis Ababa Science and Technology University!</Typography>   
    <Typography color={'white'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'justify'}}>Addis Ababa Science and Technology University (AASTU) is moving to become a research oriented university to support Ethiopia's industrial ambition by producing technology, engineering and applied sciences graduates that can support the industry sector. Research is thus reflected as a key component of the University’s mission, goals and strategies; and, to give effect to this, it follows that AASTU began offering research intensive Master's and PhD programs in 2017. Currently, AASTU offers 35 Master's and 36 PhD programs, which are in line with the national development objectives and that offers candidates an opportunity to become specialists and leaders in their respective specialization.</Typography>
    <Typography color={'white'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'justify'}}>The Office of Graduate Programs is here to provide you with all information to help you succeed in graduate studies. The office is established in September 2016 and it is responsible for graduate programs policy and administration from a student's admission through graduation.</Typography>
    </Box></section>);
}