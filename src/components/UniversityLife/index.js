import { Typography,Grid,CardMedia } from '@mui/material';
import Box from '@mui/material/Box'
import React from 'react';


export default function UniversityLife(){

    return (<section id='University_Life'><Box className='route' sx={{background:'white',paddingLeft:"30px",py:'2rem'}}>
        <Typography variant='h3' sx={{paddingLeft:"15px",color:'black',mb:'2rem',fontWeight:'bold',textAlign:'center'}}>University Life</Typography>
     <Typography variant='h5' sx={{paddingLeft:"15px",color:'black'}}>Welcome to Addis Ababa Science and Technology University!</Typography>   
    <Typography color={'#666'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'center'}}>For most of you, University life is your first
experience to live away from family. As a result, some of you may feel that the University student
life such as loneliness, peer-group interaction etc is
challenging.</Typography>
    <Typography color={'#666'}  sx={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"30px",lineHeight:2,textAlign:'center'}}>Indeed, it is not easy to miss family comfort and
cope up to a new and complex university social life. However, sooner or later you will adopt the new
environment to be independent and self-supporting
grown person, just the same way a one year child
manages to stand by her/his self and start walking. In this regard, AASTU is committed to facilitate
and support you through all of its organs not only to
adapt University life but also to fully utilize the
resources set to create a responsible and capable
citizen.</Typography>
        <Grid item xs={4} >
                <CardMedia
                    className="Media"
                    image={''}
                    title={'Culture Day'}
                >
                    <Typography className="MediaCaption">
                       Class of 2014 Culture Day
                    </Typography>
                </CardMedia>

            </Grid>
    </Box></section>);
}

