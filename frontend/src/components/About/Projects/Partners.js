import React from 'react';
import AboutContainer from "../AboutContainer";
import {List} from "semantic-ui-react";


const Partners = () => <AboutContainer title='Partners'>
    <h3>Currently, VCRH is collaborating with:</h3>
    <List  as='Ul'>
        <List.Item as='li'>  NHIF and community based organizations
            (CBOs). </List.Item>
        <List.Item as='li'>CGV</List.Item>
        <List.Item as='li'>MOH</List.Item>
        <List.Item as='li'>KEMRI/Welcome Trust</List.Item>
        <List.Item as='li'>Masinde Muliro University Of Science And Technology</List.Item>
        <List.Item as='li'>Maseno University</List.Item>
        <List.Item as='li'>Moi University</List.Item>
        <List.Item as='li'>KMTC</List.Item>
        <List.Item as='li'>JKUAT</List.Item>
        <List.Item as='li'>MozzartBet</List.Item>
        <List.Item as='li'>Universal health coverage(UHC)</List.Item>
        <List.Item as='li'>ICT Authority</List.Item>

    </List>

</AboutContainer>;

export default Partners;