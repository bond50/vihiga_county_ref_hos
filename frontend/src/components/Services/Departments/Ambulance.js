import React from 'react';
import AboutContainer from "../../About/AboutContainer";
import {List} from "semantic-ui-react";


const Ambulance = () => <div className='w3-margin-top'>
    <AboutContainer title='Ambulance Services'>
        <List as='ul' >
            <List.Item>Referral In</List.Item>
            <List.Item>Referral out</List.Item>
            <List.Item>Transport Ambulance</List.Item>
        </List>
    </AboutContainer>
</div>

export default Ambulance;