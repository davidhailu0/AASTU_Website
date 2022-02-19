import {Box,Typography} from '@mui/material';
import google from '../../images/google.png';
import apple from '../../images/Apple.png';
import microsoft from '../../images/microsoft.png';
import tesla from '../../images/tesla.png';
import johnson from '../../images/Johnson.png';
import ibm from '../../images/IBM.jpg';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import amazon from '../../images/amazon.png';
import cloudera from '../../images/cloudera.png';
import './ourPartners.css';
export default function OurPartners(){
    return (<section id='Our_Partners' className='our_partners'>
        <Waypoint onEnter={()=>{
            $('.row1').addClass('animate__slideInRight animate__delay-1s');
            $('.row2').addClass('animate__slideInRight animate__delay-1s');
        }}/>
        <Typography sx={{textAlign:'center',fontWeight:'bold',mb:'0.5rem'}} variant='h2'>Our Partners</Typography>
        <hr style={{width:'100px',marginBottom:'2rem',color:'#1067CC'}}/>
        <Box sx={{display:{xs:'grid',md:'flex'},justifyContent:'space-evenly',alignItems:'center',rowGap:'2rem',mb:'3rem'}} className='animate__animated row1'>
            <Box><img src={google} height='100' alt="google" /></Box>
            <Box><img src={apple} height='100' alt="apple" /></Box>
            <Box><img src={johnson} height='100' alt="dell"/></Box>
        </Box>
        <Box sx={{display:{xs:'grid',md:'flex'},justifyContent:'space-evenly',alignItems:'center',rowGap:'2rem',}} className='animate__animated row2'>
            <Box><img src={microsoft} height='100' alt="microsoft" /></Box>
            <Box><img src={tesla} height='100' alt="tesla" /></Box>
            <Box><img src={johnson} height='100' alt="johnson" /></Box>
        </Box>
        <Box sx={{display:{xs:'grid',md:'flex'},justifyContent:'space-evenly',alignItems:'center',rowGap:'2rem',mt:'4rem'}} className='animate__animated row2'>
            <Box sx={{ml:'3rem'}}><img src={ibm} height='100' alt="microsoft" /></Box>
            <Box><img src={amazon} height='100' alt="tesla" /></Box>
            <Box><img src={cloudera} height='100' alt="johnson" /></Box>
        </Box>
    </section>);
}