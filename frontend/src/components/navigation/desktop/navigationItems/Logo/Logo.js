import React from 'react';
import {myStyles} from './Logo.module.css';
import logo from '../../../../../assets/logo/VCGlogo.png';
import {Image} from "semantic-ui-react";


const Logo = () => (
    <div className={myStyles} >
        <Image src={logo}/>
    </div>
);

export default Logo;