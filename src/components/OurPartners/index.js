import {Box,Typography} from '@mui/material';
import google from '../../images/google.png';
import apple from '../../images/Apple.png';
import microsoft from '../../images/microsoft.png';
import tesla from '../../images/tesla.png';
import johnson from '../../images/Johnson.png';
import './ourPartners.css';
export default function OurPartners(){
    return (<section id='Our_Partners' className='our_partners'>
        <Typography sx={{textAlign:'center',fontWeight:'bold',mb:'0.5rem'}} variant='h2'>Our Partners</Typography>
        <hr style={{width:'100px',marginBottom:'2rem',color:'#1067CC'}}/>
        <Box sx={{display:{xs:'grid',md:'flex'},justifyContent:'space-evenly',alignItems:'center',rowGap:'2rem',mb:'3rem'}}>
            <Box><img src={google} alt="google" /></Box>
            <Box><img src={apple} alt="apple" /></Box>
            <Box><img src={johnson} alt="dell" /></Box>
        </Box>
        <Box sx={{display:{xs:'grid',md:'flex'},justifyContent:'space-evenly',alignItems:'center',rowGap:'2rem',}}>
            <Box><img src={microsoft} alt="microsoft" /></Box>
            <Box><img src={tesla} alt="tesla" /></Box>
            <Box><img src={johnson} alt="pepsi" /></Box>
        </Box>
    </section>);
}