import React from 'react';
import mAvatar from '../../../assets/avatar/maleavatar.jpg'
import fAvatar from '../../../assets/avatar/femaleAvatar.jpg'
import SinglePerson from "./SinglePerson";
import AboutContainer from "../AboutContainer";
import {List, Card,} from "semantic-ui-react";


const Management = () =>

    <AboutContainer title='Leadership and Governance'>
        <p>VCRH is run by the Hospital Management Team under the leadership of the Medical Superintendent
            and
            supervision by the Hospital Management Committee. </p>
        <p>The Hospital Management Committee is appointed
            by
            the CEC Health under Act 235 (1) (b) Constitution of Kenya 2010 and Section 67 of the County
            Governments Act 2012; and represents the interests of the community. The medical superintendent
            reports to the County Health Management Team through the County Director of Health. The County
            Director of Health in turn reports to the Chief Officer of Health and gives technical advice to
            the
            County Executive Committee member of Health (who heads the Department of Health) and the County
            Governor.</p>
        <h3>The facility has:</h3>
        <List as='ol'>
            <List.Item as='li'> A well Established , effective and efficient hospital management leadership
                and governance
                system.
            </List.Item>
            <List.Item as='li'>Improved health governance system.</List.Item>
            <List.Item as='li'>Improved stewardship on health management agenda.</List.Item>
            <List.Item as='li'>Streamlined health partnership arrangements.</List.Item>
            <List.Item as='li'>Enhanced stakeholder coordination and participation.</List.Item>
        </List>
        <Card.Group itemsPerRow={4}>
            <SinglePerson names='Dr. Vitalis Juma' src={mAvatar} description='The Medical Superintendent'/>
            <SinglePerson names='Mrs. Mary Anduvate' src={fAvatar} description='The Hospital Administrator'/>
            <SinglePerson names='Dr. Lorna Awiti' src={fAvatar} description='The Head Of Clinical Services'/>
            <SinglePerson names='Mr. Aggrey Ememwa' src={mAvatar} description='The Hospital Nursing Officer'/>
        </Card.Group>
        <Card.Group itemsPerRow={4}>
            <SinglePerson names='Dr. Duncan Mating' src={mAvatar} description='The Hospital Pharmacist'/>
            <SinglePerson names='Mr. Julius Ashono' src={mAvatar} description='The Head Of Diagnostic Services'/>
            <SinglePerson names='Mr. Arnest Namayi' src={mAvatar} description='The Hospital HRIO'/>
            <SinglePerson names='Mr. Aliwa' src={mAvatar} description='The Hospital PHO '/>
        </Card.Group>


        {/*</div>*/}
        {/*<div className='w3-container w3-small'>*/}
        {/*    <a href={pdf} download><i className="fa fa-download w3-margin-right "/>Download VCRH Organogram</a>*/}
        {/*</div>*/}
    </AboutContainer>


;

export default Management;