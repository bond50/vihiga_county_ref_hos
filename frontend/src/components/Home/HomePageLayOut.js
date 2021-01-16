import React from 'react';
import HomeAchieved from "./Achieved/HomeAchieved";
import HomeStrategic from "./HomeStrategic";
import HomePrincipals from "./HomePrincipals";
import HomeWelcome from "./Welcome/HomeWelcome";
import HomeRoles from "./HomeRoles";
import Heading from "./Heading/Heading";
import {Container} from "semantic-ui-react";
import classes from './HomepageHeading.module.css'


const HomepageLayout = () => (
        <React.Fragment>
            <Heading/>
            <Container className={classes.content}>
                <HomeWelcome/>
                <HomeAchieved/>
                <HomeStrategic/>
                <HomePrincipals/>
                <HomeRoles/>
            </Container>
        </React.Fragment>
    )
;

export default HomepageLayout
