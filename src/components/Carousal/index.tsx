import React from 'react';
import Carousel from 'react-material-ui-carousel';
import undergraduate from '../../images/background.jpg';
import robot from '../../images/robot.jpg';
import culture from '../../images/culture.png';
import './Carousal.scss';

import {
    Card,
    CardMedia,
    Typography,
    Grid,
} from '@mui/material';


const Example = () => {
    return (
        <div style={{ marginTop: "74px", color: "#000",paddingLeft:"20px",paddingRight:"20px",backgroundColor:"#fff"}} id="home">
            <br/>
            <Carousel
                className="Example"
                // next={(now: any, previous:any) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                
                // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                // indicatorContainerProps={{style: {margin: "20px"}}}
                // NextIcon='next'
                indicators={false}
            >
                {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} />
                    })
                }
            </Carousel>
        </div>
    );
}


type Item = {
    Name: string, Image: string
}

interface BannerProps
{
    item: Item,
    length?: number,

}


const Banner = (props: BannerProps) => {

        const media = (
            <Grid item xs={12} >
                <CardMedia
                    className="Media"
                    image={props.item.Image}
                    title={props.item.Name}
                >
                    <Typography className="MediaCaption">
                        {props.item.Name}
                    </Typography>
                </CardMedia>
            </Grid>
        )
    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {media}
            </Grid>
        </Card>
    )
}

const items: Item[] = [
    {
                Name: "Undergraduate Studies",
                Image: undergraduate
    },
    {
                Name: "Culture Day",
                Image: culture
    },
    {
                Name: "Robotics",
                Image: robot
    }
]


export default Example;