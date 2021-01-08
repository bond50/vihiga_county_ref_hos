import React from 'react';
import AboutContainer from "../About/AboutContainer";
import {List} from "semantic-ui-react";


const Preparedness = () => <AboutContainer title='Measures To Be Observed At Vihiga County Referral Hospital During The
            COVID-19 Pandemic Period'>

    <List as='ul' >
        <List.Item as='li'>
            <strong>Visiting hours: <em>Limit one relative per patient</em>:</strong>
            <List as='ul'>
                <List.Item>1.00 PM: Pediatric Ward and Maternity/Nursery</List.Item>
                <List.Item>4.00 PM : Female and Male Wards</List.Item>
            </List>
        </List.Item>
        <List.Item as='li'>No foodstuff from home/outside.</List.Item>
        <List.Item as='li'>No hawking at the gate and its environs.</List.Item>
        <List.Item as='li'>No parking of personal vehicles, motorcycles and bicycles in the
            hospital.
        </List.Item>
        <List.Item as='li'>Staff to park vehicles at the staff quarters</List.Item>
        <List.Item as='li'>Screening of all people entering the hospital at the parking lot.</List.Item>
        <List.Item as='li'>Triaging to be done outside: in the set up tents.</List.Item>
        <List.Item as='li'>Outpatient services will be carried in the tents.</List.Item>
        <List.Item as='li'>Staff in contact with patients to be provided with facemask.</List.Item>
        <List.Item as='li'>  Everyone MUST use available hand washing services and/or sanitizer.</List.Item>
        <List.Item as='li'>All patients who are coughing to be given a facemask..</List.Item>
        <List.Item as='li'>Ensure all windows are open throughout.</List.Item>
        <List.Item as='li'>Suspension of all elective surgeries.</List.Item>
        <List.Item as='li'> Express drug-refill for patients on follow-up in our clinics.</List.Item>
        <List.Item as='li'> Limit special clinic booking to 30 patients.</List.Item>
        <List.Item as='li'> Ward rounds to be limited to one intern/one consultant/MO per
            patient.</List.Item>
        <List.Item as='li'> No relatives in the ward during ward rounds unless its deemed
            necessary.</List.Item>
        <List.Item as='li'> Request all staff on leave (except maternity) to report back.</List.Item>
        <List.Item as='li'> Suspension of CME</List.Item>
    </List>
</AboutContainer>


export default Preparedness;