import React from 'react';
import AboutContainer from "../../About/AboutContainer";
import {List} from "semantic-ui-react";

const Nursing = () =>
    <AboutContainer title='Service Delivery'>
        <List style={{fontSize:'1.33em'}}>
            <List.Item>Available skills and experience for a wide range of nursing services</List.Item>
            <List.Item>Services are generally affordable and cost-effective.</List.Item>
            <List.Item>Services are equitable and compassionate.</List.Item>
        </List>
    </AboutContainer>


export default Nursing;