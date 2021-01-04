import React from 'react';


import AboutContainer from "../../About/AboutContainer";
import {List} from "semantic-ui-react";

const Radiology = () => <div className='w3-margin-top'>
    <AboutContainer title='Imaging And Radiology Services'>
        <List as='ul' style={{fontSize:'1.33em'}}>
            <List.Item>General Digital X-ray </List.Item>
            <List.Item>Portable Digital X-ray </List.Item>
            <List.Item>Mammography</List.Item>
            <List.Item>OPG /Dental X-ray</List.Item>
            <List.Item>Digital Ultrasound</List.Item>
            <List.Item>CT scan (32 slice and 64 slice) services</List.Item>
        </List>
    </AboutContainer>
</div>;

export default Radiology;