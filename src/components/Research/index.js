import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import "animate.css/animate.min.css";
import robot from '../../images/ar_intel.jpg';
import React from 'react';


export default function AboutUs(){

    return (<section id='Research'><Box className='route' sx={{background:'black',paddingLeft:"30px",py:'2rem'}}>
        <Typography variant='h3' sx={{paddingLeft:"15px",color:'white',mb:'2rem',fontWeight:'bold',textAlign:'center',ml:{md:'20rem',xs:'0'}}}>Research</Typography>
        <Box sx={{display:{xs:'grid',md:'flex'}}}>
        <Box sx={{flexBasis:"48%"}}>
          <img src={robot} alt='robot' style={{width:"100%"}}/>
        </Box>
        <Box sx={{flexBasis:"48%"}}>   
    <Typography color={'white'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'justify'}}>The Artificial Intelligence and Robotics is one of the centers of excellence which is identified by the ministry of science and technology to be established in Addis Ababa Science and Technology University.  The Artificial Intelligence & Robotics center of excellence (AI&R CoEs) is established with the aim to create a close collaboration between the academia and industries in the fields of Artificial intelligence and robotics.</Typography>
    <Typography color={'white'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'justify'}}>Addis Ababa Science and Technology University (hereafter AASTU) is one of the young and dynamic national universities that was established in 2011 to play a leading role in technological innovation and economic transformation of Ethiopia by undertaking problem solving and high-impact research projects. The main focus of research activities at the University is to boost the global competitiveness of local industries and business institutions. In GTP II, Ethiopia has paid a special attention to the development and application of ICTs, where academic and research institutions like AASTU are expected to play a key role.</Typography>
    <Typography color={'white'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'justify'}}>AASTU recognizes the vital role of advanced research and training programs in enhancing the productivity and prosperity of the national economy. In its endeavor to address the major economic and social problems of the country, AASTU has launched 8 selected centers of excellence (CoEs), including the CoE for High Performance Computing and Big Data Analytics (hereafter HPC and BDA). The main aim of the CoE for HPC and BDA is to serve as a common computational platform for advanced research and training programs. The initiative to establish the CoE for HPC and BDA is, therefore, a nation-wide effort to build a world-class HPC system and data center, which will provide all researchers across the country with state-of-the-art supercomputing resources and services.</Typography>
    </Box>
    </Box>
    </Box></section>);
}