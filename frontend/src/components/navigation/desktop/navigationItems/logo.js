import React from 'react';
import './logo.css';

import './logo.css';
import logo from '../../../../assets/logo/logo.png'

const Logo = ({height,style}) => (
    <div className='responsive'>
        <img src={logo} alt="logo" height={height} style={style}/>
    </div>
);

export default Logo;