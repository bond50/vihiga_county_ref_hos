import React from "react";
import './corousel.css';
import img1 from '../../../assets/carousel/one.JPG'
import img2 from '../../../assets/carousel/two.JPG'
import img3 from '../../../assets/carousel/renal.JPG'
import img4 from '../../../assets/carousel/three.JPG'

import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Image} from "semantic-ui-react";


const Slider = () => {
    return <Carousel autoPlay infiniteLoop showThumbs={false}>


        <>
            <Image src={img1} alt='mmm'/>
        </>
        <>
            <img src={img2} alt='mmm' style={{width: '100%', maxHeight: '100%'}}/>
        </>
        <>
            <img src={img3} alt='mmm' style={{width: '100%', maxHeight: '100%'}}/>
        </>

        <>
            <img src={img4} alt='mmm' style={{width: '100%', maxHeight: '100%'}}/>
        </>


    </Carousel>;
};

export default Slider;




