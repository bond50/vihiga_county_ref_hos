import React from 'react';

import AboutContainer from "../../About/AboutContainer";
import {List, Header} from "semantic-ui-react";


const Pharmacy = () =>
    <AboutContainer title='The Vihiga County Referral Hospital Pharmacy'>
        <List.Item style={{fontSize:'1.33em'}}>
            The pharmacy team in Vihiga County Referral Hospital is highly skilled and offer professional
            services to
            clients.We offer both outpatient and inpatient services. We dispense standard medicines at
            affordable prices. Our in house committee inspects the medicines before stocking. The Hospital procures
            all medicines and medical supplies only from registered suppliers thereby guaranteeing our patients
            quality medicines at all times, especially in light of the risk of counterfeit and substandard products
            in the industry.
        </List.Item>
        <Header as='h3'>Pharmacy Services</Header>
        <p>The main pharmacy is in Kenya,Vihiga County ,Along Kisumu-Kakamega road at mbale centre within Vihiga
            County referral Hospital ,on the basement next to ICT/PABX Room. The main outpatient Pharmacy operates
            at 24/7 basis.We offer services even at
            night and on weekends at
            highly secured environment. We also have other pharmacy outlets within the Hospital the second most
            common one is the NHIF out patient Pharmacy located next to physiotherapy department</p>
        <p>We offer services to all categories of patients and clients be it inpatient ,outpatient or walk in
            patient provided the patient is seen by the doctor within or outside the
            hospital.At night patients are assured of best services </p>
        <p>We look forward to ensure that all prescribed medicines are available at our pharmacy at better
            discounted prices </p>
        <List.Header as='h3'>Vihiga County referral Hospital Has the following Pharmacy Outlets</List.Header>
        <List as='ul' style={{fontSize:'1.33em'}}>
            <List.Item as='li'>Outpatient Pharmacy</List.Item>
            <List.Item as='li'>NHIF pharmacy</List.Item>
            <List.Item as='li'>Inpatient Pharmacy</List.Item>
            <List.Item as='li'>Amenity Pharmacy</List.Item>
            <List.Item as='li'>MCH/Under-5 Pharmacy</List.Item>
        </List>
    </AboutContainer>

export default Pharmacy;