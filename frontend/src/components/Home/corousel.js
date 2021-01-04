import React from "react";
import './corousel.css';
import img1 from '../../assets/carousel/one.JPG'
import img2 from '../../assets/carousel/two.JPG'
import img3 from '../../assets/carousel/renal.JPG'
import img4 from '../../assets/carousel/three.JPG'

import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Slider = () => <Carousel autoPlay infiniteLoop showThumbs={false}>

        <>
            <img src={img1} alt='mmm' />
            <p className="legend ">Legend 3</p>
        </>
        <>
            <img src={img2} alt='mmm' style={{width: '100%', maxHeight: '100%'}}/>
            <p className="legend ">Legend 3</p>
        </>
        <>
            <img src={img3} alt='mmm' style={{width: '100%', maxHeight: '100%'}}/>
            <p className="legend">Legend 3</p>
        </>

        <img src={img4} alt='mmm' style={{width: '100%', maxHeight: '100%'}}/>
        <p className="legend">Legend 3</p>



</Carousel>;

export default Slider;




