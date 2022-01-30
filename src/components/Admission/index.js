import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import React from 'react';


export default function AboutUs(){

    return (<section id='Admissions'><Box className='route' sx={{background:'white',paddingLeft:"30px",py:'2rem'}}>
        <Typography variant='h3' sx={{paddingLeft:"15px",mb:"2rem"}}>Admissions</Typography>
    <Typography color={'#666666'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'justify'}}>Admissions to all undergraduate continuing
education programs shall be processed through the
academic units, in consultation with the University
Registrar and CEP, according to policies set for
such admissions in line with ministry of education. Relevant information including student handbook, Academic Calendar, Readmission form etc… shall
be posted at the University web site.</Typography>
    <Typography color={'#666666'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"35px",lineHeight:2,textAlign:'justify'}}>The University in certain circumstances may admit
students jointly with other affiliated universities or
institutes. Such admission may be processed at any
time of the academic calendar as deemed
appropriate. Students may also be admitted to more
than one program at the same time. However, criteria for such special admissions to individual
programs shall be developed and recommended by
College Academic Council (CAC) and endorsed by
the admission and enrollment committee (AEC).</Typography>
    </Box></section>);
}