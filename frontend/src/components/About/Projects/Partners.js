import React from 'react';
import AboutContainer from "../AboutContainer";
import {List} from "semantic-ui-react";


const Partners = () => <AboutContainer title='Partners'>
    <h3>Currently, VCRH is collaborating with:</h3>
    <List as='ul'>
        <List.Item as='li'> Collaboration with NHIF and community based organizations
            (CBOs). </List.Item>
        <List.Item as='li'>CGV</List.Item>
        <List.Item as='li'>MOH</List.Item>
        <List.Item as='li'>KEMRI/Welcome trust</List.Item>
        <List.Item as='li'>Masinde Muliro University Of Science And Technology</List.Item>
        <List.Item as='li'>Maseno University</List.Item>
    </List>

</AboutContainer>;

export default Partners;