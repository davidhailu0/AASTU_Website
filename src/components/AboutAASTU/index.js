import { Typography} from '@mui/material';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import CountUp from 'react-countup';
import { Waypoint } from 'react-waypoint';
import Lottie from 'react-lottie';
import $ from 'jquery';
import React from 'react';
import aboutUsAnim from '../../Animation/aboutUsAnime.json';
import './aboutAASTU.css';

export default function AboutUs(){
const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: aboutUsAnim,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (<section id='About_AASTU'><Box className='route' sx={{background:'white',paddingLeft:"30px",py:'2rem',position:'relative'}}>
        <Waypoint onEnter={()=>{
          $('.aboutAASTU').addClass('animate__slideInLeft');
          $('.aastuContent').addClass('animate__slideInLeft');
        }}/>
        <Box sx={{display:'flex'}}>
        <Box sx={{flexBasis:"48%",alignSelf:'center'}}>
            <div style={{height:"17rem",zIndex:'9',background:"#1067cc",width:'100px',display:'inline-block',position:'absolute',textAlign:'center'}} className='aboutAASTU animate__animated animate__delay-1s'><p style={{fontWeight:'bold',fontFamily:'roboto',paddingInline:'0.5rem',paddingTop:'7rem'}}>About AASTU</p></div>
              <div style={{height:'15rem',background:'black',paddingTop:'2rem',width:'80%',display:'inline-block',paddingLeft:'110px'}} className='aastuContent animate__animated animate__delay-2s'>
           <Typography sx={{pt:'3rem'}}>
          Addis Ababa Science and Technology University had a direct and reasonable 
          connection with the Five-Year Growth and Transformation Plan (2010-2015) of the government of
           the Federal Democratic Republic of Ethiopia.</Typography>
           </div>
        </Box>
        <Box sx={{flexBasis:'48%'}}>
         <Lottie 
	        options={defaultOptions}
          height={400}
          width={400}
        />
        </Box>
        </Box>
    <Typography variant='h5' sx={{paddingLeft:"15px",py:"1rem",textAlign:'center',fontWeight:'bold'}}>AASTU in Numbers</Typography>
    <Box sx={{display:{xs:'grid',md:'flex'}}} justifyContent={'space-evenly'} rowGap={'2rem'}>
    <MyCard type={'Undergraduate'} count={8000}/>
    <MyCard type={'Postgraduate'} count={700}/>
    <MyCard type={'Academic Staff'} count={472}/>
    <MyCard type={'Administrative Staff'} count={391}/>
    </Box>
    </Box></section>);
}
export function MyCard(props){
  let count = false;
    return (<Card sx={{ width:300,height:200,display:'flex',justifyContent:'center',alignItems:'center'}} >
      <CardContent>
        <Typography sx={{ fontSize: 14,textAlign:'center' }} color="text.secondary" gutterBottom>
          {props.type}
        </Typography>
        <Typography variant="h5" component="div" sx={{color:'#1976D2',textAlign:'center'}} >
          <CountUp
  start={0}
  end={props.count}
  duration={2.75}
  separator=" "
  decimal=","
>
  {({ countUpRef, start }) => (
    <><Waypoint
  onEnter={()=>{
    if(count===false){
      start();
      count=true;
    }
  }}
   />
   <span ref={countUpRef} />
   </>
  )}
</CountUp>
        </Typography>
      </CardContent>
    </Card>)
}