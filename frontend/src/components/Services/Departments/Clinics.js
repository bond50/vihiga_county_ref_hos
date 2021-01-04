import React from 'react';
import AboutContainer from "../../About/AboutContainer";
import {Icon, List, Table} from "semantic-ui-react";

const Clinics = () => {
    return (
        <AboutContainer title='Crucial information about our clinics'>
            <List.Header as='h5'>Medical Outpatient Clinic (MOPC):</List.Header>
            <List as='ul' style={{fontSize: '1.33em'}}>
                <List.Item as='li'>Every Monday and Friday <a>8am -1pm</a></List.Item>
            </List>
            <List.Header as='h5'>Surgical Outpatient Clinic (SOPC):</List.Header>
            <List as='ul' style={{fontSize: '1.33em'}}>
                <List.Item as='li'>Every Wednesday <a>8am -1pm</a></List.Item>
            </List>

            <List.Header as='h5'>Paediatric Outpatient Clinic (POPC):</List.Header>
            <List as='ul' style={{fontSize: '1.33em'}}>
                <List.Item as='li'>Every Thursday <a>8am -1pm</a></List.Item>
            </List>
            <List.Header as='h5'>Gynaecological Outpatient Clinic (GOPC):</List.Header>
            <List as='ul' style={{fontSize: '1.33em'}}>
                <List.Item as='li'>Every Thursday <a>8am -1pm</a></List.Item>
            </List>
            <List.Header as='h5'>Eye  Clinic :</List.Header>
            <List as='ul' style={{fontSize: '1.33em'}}>
                <List.Item as='li'>Monday - Friday <a>8am -4pm</a></List.Item>
            </List>
            <List.Header as='h5'>Dental  Clinic :</List.Header>
            <List as='ul' style={{fontSize: '1.33em'}}>
                <List.Item as='li'>Monday - Friday <a>8am -4pm</a></List.Item>
            </List>
            <List.Header as='h5'>Psychiatric Clinic :</List.Header>
            <List as='ul' style={{fontSize: '1.33em'}}>
                <List.Item as='li'>Monday - Friday <a>8am -4pm</a></List.Item>
            </List>

            <List.Header as='h5'>Orthopaedic  Clinic :</List.Header>
            <List as='ul' style={{fontSize: '1.33em'}}>
                <List.Item as='li'>Monday - Friday <a>8am -4pm</a></List.Item>
            </List>







        </AboutContainer>
    );
};

export default Clinics;