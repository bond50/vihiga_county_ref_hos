import React from 'react';
import './logo.css';

import './logo.css';
import logo from '../../../../assets/logo/logo.png'
import {Image} from "semantic-ui-react";

const Logo = () => (
    <div className='Logo'>
        <Image src={logo}/>
    </div>
);

export default Logo;