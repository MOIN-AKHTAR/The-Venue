import React from 'react';
import {makeStyles} from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/slide_one.jpg';
import img2 from '../Assets/slide_two.jpg';
import img3 from '../Assets/slide_three.jpg';

const useStyles=makeStyles({
    carouselImg:{
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
    }
})

export default function CarouselCustom() {
    const classes=useStyles()
const renderArrowPrev= () =>null;
const renderArrowNext=() =>null;
    return (
        <div style={{height:`${window.innerHeight}px`,overflow:"hidden"}}>
            <Carousel 
            autoPlay
            renderIndicator={false}
            renderArrowPrev={renderArrowPrev}
            renderArrowNext={renderArrowNext}
            infiniteLoop
            showStatus={false}
            interval={3000}
            >
                <div 
                className={classes.carouselImg}
                style={{
                    background:`url(${img1})`,
                    height:`${window.innerHeight}px`
                }}
                ></div>
                <div 
                className={classes.carouselImg}
                style={{
                    background:`url(${img2})`,
                    height:`${window.innerHeight}px`
                }}
                ></div>
                <div 
                className={classes.carouselImg}
                style={{
                    background:`url(${img3})`,
                    height:`${window.innerHeight}px`
                }}
                ></div>
            </Carousel>
        </div>
    )
}













// <div
//                 className={classes.carouselImg}
//                 style={{
//                     background:`url(${img1})`,
//                     height:`${window.innerHeight}px`
//                 }}
//                 ></div>
//                 <div
//                 className={classes.carouselImg}
//                 style={{
//                     background:`url(${img2})`,
//                     height:`${window.innerHeight}px`
//                 }}
//                 ></div>
//                 <div
//                 className={classes.carouselImg}
//                 style={{
//                     background:`url(${img3})`,
//                     height:`${window.innerHeight}px`
//                 }}
//                 ></div>
