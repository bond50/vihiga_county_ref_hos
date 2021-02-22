import React from 'react';
import AboutContainer from "../AboutContainer";
import {Divider, Header, List} from "semantic-ui-react";

const Vision = () =>
    <AboutContainer title='Mission, Vision and Core Values'>
        <Divider />
         <Header as='h3'>
           Our Vision Statement
        </Header>
        <p>
            A facility of choice in health care provision
        </p>
        <Divider/>
        <Header as='h3'>
           Our Mission Statement
        </Header>

        <p>
            To provide quality preventive, curative and rehabilitative health care services.
        </p>
        <Divider/>
         <Header as='h3'>
           Our Core Values
        </Header>
        <List as='ul'>
            <List.Item>Accountability</List.Item>
            <List.Item>Commitment</List.Item>
            <List.Item>Integrity</List.Item>
            <List.Item>Teamwork</List.Item>
            <List.Item>Innovation</List.Item>
        </List>
    </AboutContainer>;

export default Vision;