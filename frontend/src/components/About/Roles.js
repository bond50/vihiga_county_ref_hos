import React from 'react';
import {Header, List} from "semantic-ui-react";
import AboutContainer from "./AboutContainer";

const Roles = () => <AboutContainer
    title='Roles played by vihiga county referral hospital'>
    <Header as='h5' >
        VCRH plays its role in the county by providing a wide range of health services in partnership
        with the greater community and other institutions.<br/> Some of the roles played by the hospital in
        the county include;
    </Header>
    <List as='ol'>
        <List.Item as='li'> Acting as a county referral hospitals for the 3 sub county hospitals and as an
            intermediary to the National and Teaching referral hospitals.
        </List.Item>
        <List.Item as='li'>The implementation of health policy at facility level and maintaining quality
            standards.
        </List.Item>
        <List.Item as='li'>Serving as a county center for provision of specialized health
            care.</List.Item>
        <List.Item as='li'>Offering teaching and training for health care personnel such as nurses, medical
            interns,
            pharmacist interns, pharmaceutical technologist interns,laboratory technologists, health
            records and information officers and nutritionists.
        </List.Item>
        <List.Item as='li'>Providing technical support to sub-county hospitals and health
            centers.
        </List.Item>

    </List>
</AboutContainer>


export default Roles;