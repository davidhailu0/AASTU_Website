import React from 'react';
import Carousel from 'react-material-ui-carousel';
import undergraduate from '../../images/undergraduate.jpg';
import postgraduate from '../../images/library.jpg';
import robot from '../../images/robot.jpg';
import culture from '../../images/culture.png';
import color from '../../images/color.png';
import arIntell from '../../images/ar_intel.jpg';
import './Carousal.scss';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
} from '@mui/material';


const Example = () => {
    return (
        <div style={{ marginTop: "74px", color: "#000",paddingLeft:"20px",paddingRight:"20px",backgroundColor:"#fff"}}>
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
            >
                {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                    })
                }
            </Carousel>
        </div>
    );
}


type Item = {
    Name: string,
    Caption: string,
    contentPosition: "left" | "right" | "middle",
    Items: {Name: string, Image: string}[]
}

interface BannerProps
{
    item: Item,
    contentPosition: "left" | "right" | "middle",
    length?: number,

}


const Banner = (props: BannerProps) => {

    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems: number = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={4} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={4} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items: Item[] = [
    {
        Name: "About AASTU",
        Caption: "Explore AASTU for Youself!",
        contentPosition: "left",
        Items: [
            {
                Name: "Undergraduate Studies",
                Image: undergraduate
            },
            {
                Name: "Post-graduate Studies",
                Image: postgraduate
            }
        ]
    },
    {
        Name: "University Life",
        Caption: "Immerse Yourself in small Ethiopia!",
        contentPosition: "middle",
        Items: [
            {
                Name: "Culture Day",
                Image: culture
            },
            {
                Name: "Color Day",
                Image: color
            }
        ]
    },
    {
        Name: "Research",
        Caption: "Artificial Intelligence, Robotics and More!",
        contentPosition: "right",
        Items: [
            {
                Name: "Robotics",
                Image: robot
            },
            {
                Name: "Artificial Intelligence",
                Image: arIntell
            }
        ]
    }
]


export default Example;