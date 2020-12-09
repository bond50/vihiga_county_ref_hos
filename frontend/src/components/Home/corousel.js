import React from "react";
import   './corousel.css';

import image2 from '../../assets/resized/10.JPG'
import image3 from '../../assets/resized/9.JPG'
import image4 from '../../assets/resized/8.JPG'
import image5 from '../../assets/resized/7.JPG'
import image6 from '../../assets/resized/6.JPG'
import image7 from '../../assets/resized/5.JPG'
import image8 from '../../assets/resized/4.JPG'
import image9 from '../../assets/resized/3.JPG'
import image10 from '../../assets/resized/2.JPG'
import image11 from '../../assets/resized/11.JPG'

import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Corousel = () => <Carousel autoPlay infiniteLoop showThumbs={false}>
    <>
        <img src={image11} alt='jj'/>
        <p className="legend">Legend 1</p>
    </>
    <>
        <img src={image10} alt='kk'/>
        <p className="legend">Legend 2</p>
    </>
    <>
        <img src={image9} alt='mmm'/>
        <p className="legend">Legend 3</p>
    </>
    <>
        <img src={image8} alt='mmm'/>
        <p className="legend">Legend 3</p>
    </>
    <>
        <img src={image7} alt='mmm'/>
        <p className="legend">Legend 3</p>
    </>
    <>
        <img src={image6} alt='mmm'/>
        <p className="legend">Legend 3</p>
    </>
    <>
        <img src={image5} alt='mmm'/>
        <p className="legend">Legend 3</p>
    </>
     <>
        <img src={image4} alt='mmm'/>
        <p className="legend">Legend 3</p>
    </>
    <>
        <img src={image3} alt='mmm'/>
        <p className="legend">Legend 3</p>
    </>
    <>
        <img src={image2} alt='mmm'/>
        <p className="legend">Legend 3</p>
    </>

</Carousel>;

export default Corousel;




