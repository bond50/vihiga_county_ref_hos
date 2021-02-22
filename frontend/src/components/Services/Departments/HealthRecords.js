import React from 'react';
import AboutContainer from "../../About/AboutContainer";
import {List} from "semantic-ui-react";

const HealthRecords = () => {
    return (
        <AboutContainer title='Health Records And Information Technology Department'>
            <p>Health Records and information department manages health information data by ensuring its quality
                accuracy,accessibility and security in both paper and electronic systems</p>
            <p>By use of technology Health records and information Officers/ technicians classify , code and categorise
                patient information for databases and registries and maintain patient s medical and treatment
                histories
            </p>
            <p>
                other activities in the department includes
            </p>
            <List as='ul'>
                <List.Item as='li'>
                    Collection ,analysis and dissemination of Health Information/ Data
                </List.Item>
                <List.Item as='li'>
                    Reception of patients / Clients
                </List.Item>
                <List.Item as='li'>
                    Registration of patients
                </List.Item>
                <List.Item as='li'>
                    maintenance of confidentiality of patients information
                </List.Item>
                <List.Item as='li'>
                    Filing and retrieving patient files
                </List.Item>
                <List.Item as='li'>
                    Coding and indexing of diseases according to the ICD-10
                </List.Item>
                <List.Item as='li'>
                    booking and preparation of clinics
                </List.Item>
            </List>


        </AboutContainer>
    );
};

export default HealthRecords;