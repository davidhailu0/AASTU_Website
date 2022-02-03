import {Box,Typography} from '@mui/material';
import Tel from '@mui/icons-material/Phone';
import Mobile from '@mui/icons-material/PhoneAndroid'
import Mail from '@mui/icons-material/Mail';
import Location from '@mui/icons-material/MyLocation'
import Button from '@mui/material/Button';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import aastuMap from '../../images/aastu_map.png';
import './ContactUs.css';
export default function ContactUs(){
    const aastuMapUrl = 'https://www.google.com/maps/search/AASTU/@8.8863123,38.807744,884m/data=!3m2!1e3!4b1?hl=am';
    return (<section id='Contact_Us' className='Contact_Us'>
        <Typography sx={{textAlign:'center',fontWeight:'bold',mb:'2rem'}} variant='h2'>Contact Us</Typography>
         <Box sx={{display:{md:'flex',xs:'grid'},justifyContent:'space-evenly',px:'2rem'}}>
        <Box sx={{alignSelf:'center',flexBasis:'30%'}} className='address animate__animated animate__delay-1s'>
        <Typography sx={{color:'black'}}><Tel sx={{pr:'1rem'}}/>Tel: +251 11 888 0610</Typography>
        <Typography sx={{color:'black'}}><Mobile sx={{pr:'1rem'}}/>Mob:+251 993 - 80 71 78</Typography>
        <Typography sx={{color:'black'}}><Mail sx={{pr:'1rem'}}/>E-mail: pir@aastu.edu.et</Typography>
        <Typography sx={{color:'black'}}><Location sx={{pr:'1rem'}}/>Addis Ababa, Ethiopia</Typography>
        </Box>
        {/* <div style={{flexBasis:'30%'}} dangerouslySetInnerHTML={{__html:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4213.975453195402!2d38.8075876147182!3d8.885124593620771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b82a7e392203f%3A0xb05f440eacc98f9f!2sAASTU!5e1!3m2!1sam!2set!4v1643722845315!5m2!1sam!2set" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'}}></div>     */}
        <Box sx={{flexBasis:'30%'}} className='map animate__animated animate__delay-1s'>
            <img src={aastuMap} alt='AASTU MAP' width={500} onClick={()=>{
                 window.location.href = aastuMapUrl;
            }}/>
        </Box>
        <Box component="form" noValidate sx={{ mt: 1,ml:'1rem',flexBasis:'32%' }} className='form-container animate__animated animate__delay-1s'>
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