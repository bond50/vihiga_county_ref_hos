import React from 'react';
import AboutContainer from "../../About/AboutContainer";
import {
    List

} from "semantic-ui-react";

const Clinics = () => {
    return (
        <AboutContainer title='Crucial information about our clinics'>
            <List.Header as='h5'>Medical Outpatient Clinic (MOPC):</List.Header>
            <List as='ul' >
                <List.Item >Every Monday and Friday <em>8am -1pm</em></List.Item>
            </List>
            <List.Header as='h5'>Surgical Outpatient Clinic (SOPC):</List.Header>
            <List as='ul' >
                <List.Item >Every Wednesday <em>8am -1pm</em></List.Item>
            </List>

            <List.Header as='h5'>Paediatric Outpatient Clinic (POPC):</List.Header>
            <List as='ul' >
                <List.Item >Every Thursday <em>8am -1pm</em></List.Item>
            </List>
            <List.Header as='h5'>Gynaecological Outpatient Clinic (GOPC):</List.Header>
            <List as='ul' >
                <List.Item >Every Thursday <em>8am -1pm</em></List.Item>
            </List>
            <List.Header as='h5'>Eye Clinic :</List.Header>
            <List as='ul'>
                <List.Item >Monday - Friday <em>8am -4pm</em></List.Item>
            </List>
            <List.Header as='h5'>Dental Clinic :</List.Header>
            <List as='ul' >
                <List.Item >Monday - Friday <em>8am -4pm</em></List.Item>
            </List>
            <List.Header as='h5'>Psychiatric Clinic :</List.Header>
            <List as='ul' >
                <List.Item >Monday - Friday <em>8am -4pm</em></List.Item>
            </List>

            <List.Header as='h5'>Orthopaedic Clinic :</List.Header>
            <List as='ul' >
                <List.Item >Monday - Friday <em>8am -4pm</em></List.Item>
            </List>


        </AboutContainer>
    );
};

export default Clinics;