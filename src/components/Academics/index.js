import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import React from 'react';
import {Waypoint} from 'react-waypoint';
import Typical from 'react-typical';
import $ from 'jquery';
import './academics.css';

export default function Academics(){

    return (<section id='Academics'><Box className='route' sx={{background:'black',paddingLeft:"30px",py:'2rem'}}>

        <Typical
        steps={['Courses We Offer are']}
        loop={1}
        wrapper="h3"
      />
        <Typography sx={{textAlign:'center',fontWeight:'bold',mb:'2rem',}}>We have one of the most diverse courses in Ethiopia!</Typography>
        <Box sx={{display:{xs:'grid',md:'flex'},justifyContent:'space-between',rowGap:'1.5rem',px:'2rem'}}>
            <Box sx={{border:'2px solid white',px:'1rem',height:'17rem',mr:'0.5rem'}} className='degree_card animate__animated animate__delay-1s'>
                <Typography variant='h4' sx={{color:'white',py:'2rem',textAlign:'center'}}>Degree</Typography>
                <Typography sx={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quam, eos assumenda incidunt facilis vitae ad at repudiandae necessitatibus officia. Provident esse, nostrum recusandae doloremque facere amet hic corporis eaque!</Typography>
            </Box>
            <Box sx={{border:'2px solid white',px:'1rem',height:'17rem',mr:'0.5rem'}} className='master_card animate__animated animate__delay-1s'>
                <Typography variant='h4' sx={{color:'white',py:'2rem',textAlign:'center'}}>Masters</Typography>
                <Typography sx={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sunt adipisci doloremque illo laudantium ex dolorum corporis necessitatibus, dignissimos similique cum at, eaque in dicta sapiente voluptatibus commodi cupiditate hic!</Typography>
            </Box>
            <Box sx={{border:'2px solid white',px:'1rem',height:'17rem',mr:'0.5rem'}} className='post_card animate__animated animate__delay-1s'>
                <Typography variant='h4' sx={{color:'white',py:'2rem',textAlign:'center'}}>Post Graduate</Typography>
                <Typography sx={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptate, et porro, obcaecati possimus sequi reprehenderit harum ad explicabo voluptas ab minima ipsa sit vitae placeat earum. Enim, modi impedit?</Typography>
            </Box>
             <Waypoint onEnter={()=>{
            $('.degree_card').addClass('animate__slideInRight');
            $('.master_card').addClass('animate__slideInRight');
            $('.post_card').addClass('animate__slideInRight');
        }}/>
        </Box>
    <Typography color={'white'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'center'}}>Addis Ababa Science and Technology University (AASTU) is moving to become a research oriented university to support Ethiopia's industrial ambition by producing technology, engineering and applied sciences graduates that can support the industry sector. Research is thus reflected as a key component of the University’s mission, goals and strategies; and, to give effect to this, it follows that AASTU began offering research intensive Master's and PhD programs in 2017. Currently, AASTU offers 35 Master's and 36 PhD programs, which are in line with the national development objectives and that offers candidates an opportunity to become specialists and leaders in their respective specialization.</Typography>
    <Typography color={'white'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'center'}}>The Office of Graduate Programs is here to provide you with all information to help you succeed in graduate studies. The office is established in September 2016 and it is responsible for graduate programs policy and administration from a student's admission through graduation.</Typography>
    </Box></section>);
}