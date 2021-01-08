import React from 'react';
import AboutContainer from "../../About/AboutContainer";
import {List} from "semantic-ui-react";

const Directorates = () =>
    <AboutContainer title='Directorates Of Clinical Services'>

        <p>The hospital has specialized personnel including general surgeons, physicians, a pediatrician,
            obstetrician & gynecologist, ophthalmologist, nurses, clinical officers, laboratory
            technologists, rehabilitative staff and public health staff.</p>
        <List.Header as='h3'>The clinical services provided include:</List.Header>
        <List as='ul' >
            <List.Item as='li'>Internal Medicine</List.Item>
            <List.Item as='li'>General surgery and anesthesia</List.Item>
            <List.Item as='li'>Pediatrics</List.Item>
            <List.Item as='li'>Obstetrics and gynecology</List.Item>
            <List.Item as='li'>Dental services</List.Item>
            <List.Item as='li'>Psychiatry</List.Item>
            <List.Item as='li'>Ophthalmology</List.Item>
            <List.Item as='li'>Pharmaceutical services</List.Item>
            <List.Item as='li'>Ambulatory and emergency services</List.Item>
            <List.Item as='li'>Laboratory services</List.Item>
            <List.Item as='li'>Rehabilitative care</List.Item>
            <List.Item as='li'>Counseling</List.Item>
            <List.Item as='li'>Physiotherapy</List.Item>
            <List.Item as='li'>Nutritional services</List.Item>
            <List.Item as='li'>Radiological Imaging services</List.Item>
        </List>
    </AboutContainer>


export default Directorates;