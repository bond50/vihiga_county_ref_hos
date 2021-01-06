import React from 'react';
import AboutContainer from "../AboutContainer";
import {List} from "semantic-ui-react";

const CoreValues = () => <AboutContainer title='Core Values'>
            <List as='ul' style={{fontSize:'1.33em'}}>
                <List.Item >Accountability</List.Item>
                <List.Item >Commitment</List.Item>
                <List.Item >Integrity</List.Item>
                <List.Item >Teamwork</List.Item>
                <List.Item >Innovation</List.Item>
            </List>

    </AboutContainer>;

export default CoreValues ;