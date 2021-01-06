import React from 'react';
import {myStyles} from './Logo.module.css';
import logo from '../../../../../assets/logo/lognobg.png';



const Logo = () => (
    <div className={myStyles} >
        <img src={logo} alt='Logo'/>
    </div>
);

export default Logo;