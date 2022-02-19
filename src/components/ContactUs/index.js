import {Box,Typography} from '@mui/material';
import Tel from '@mui/icons-material/Phone';
import Mobile from '@mui/icons-material/PhoneAndroid'
import Mail from '@mui/icons-material/Mail';
import Location from '@mui/icons-material/MyLocation'
import Button from '@mui/material/Button';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import videoCT from '../../videos/contactUs.mp4';
import aastuMap from '../../images/aastu_map.png';
import './ContactUs.css';
export default function ContactUs(){
    const aastuMapUrl = 'https://www.google.com/maps/search/AASTU/@8.8863123,38.807744,884m/data=!3m2!1e3!4b1?hl=am';
    return (<section id='Contact_Us' className='Contact_Us animate__slideInRight'>
       {/* <Wave mask="url(#mask)" fill="#1277b0" >
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0" stopColor="white" />
      <stop offset="0.5" stopColor="black" />
    </linearGradient>
    <mask id="mask">
      <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
    </mask>
  </defs>
</Wave> */}
        <video src={videoCT} autoPlay loop muted/>
        <Typography sx={{textAlign:'center',fontWeight:'bold',mb:'2rem'}} variant='h2'>Contact Us</Typography>
         <Box sx={{display:{md:'flex',xs:'grid'},justifyContent:'space-evenly',px:'2rem'}}>
        <Box sx={{flexBasis:'30%',ml:'4rem'}} className='address animate__animated animate__delay-1s'>
        <Typography sx={{color:'white'}}><Tel sx={{pr:'1rem',color:'white'}}/>Tel: +251 11 888 0610</Typography>
        <Typography sx={{color:'white'}}><Mobile sx={{pr:'1rem',color:'white'}}/>Mob:+251 993 - 80 71 78</Typography>
        <Typography sx={{color:'white'}}><Mail sx={{pr:'1rem',color:'white'}}/>E-mail: pir@aastu.edu.et</Typography>
        <Typography sx={{color:'white'}}><Location sx={{pr:'1rem',color:'white'}}/>Addis Ababa, Ethiopia</Typography>
        </Box>
        {/* <div style={{flexBasis:'30%'}} dangerouslySetInnerHTML={{__html:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4213.975453195402!2d38.8075876147182!3d8.885124593620771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b82a7e392203f%3A0xb05f440eacc98f9f!2sAASTU!5e1!3m2!1sam!2set!4v1643722845315!5m2!1sam!2set" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'}}></div>     */}
        <Box sx={{flexBasis:'30%'}} className='map animate__animated animate__delay-1s'>
            <img src={aastuMap} alt='AASTU MAP' width={500} onClick={()=>{
                 window.location.href = aastuMapUrl;
            }}/>
        </Box>
        <Box component="form" noValidate sx={{ mt: 1,ml:'1rem',flexBasis:'32%',mr:'1rem' }} className='form-container animate__animated animate__delay-1s'>
            <input type="text" placeholder='Enter Your Name' required/>
            <input type="email" placeholder='Enter Your Email Address' required/>
            <input type="text" placeholder='Enter Your Subject' required/>
            <textarea rows="8" required placeholder='Message'></textarea>
            <Button variant='contained' sx={{textAlign:'center',margin:'auto',background:'black',":hover":{color:"black",backgroundColor:"white"}}}>Submit</Button>
        </Box>
        <Waypoint onEnter={()=>{
            $('.address').addClass('animate__flipInY');
            $('.map').addClass('animate__flipInY');
            $('.form-container').addClass('animate__flipInY');
        }}/>
        </Box>
    </section>);
}