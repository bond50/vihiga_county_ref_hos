import React from 'react';
import HomeAchieved from "./Achieved/HomeAchieved";
import HomeStrategic from "./HomeStrategic";
import HomePrincipals from "./HomePrincipals";
import HomeWelcome from "./Welcome/HomeWelcome";
import HomeRoles from "./HomeRoles";
import {Container} from "semantic-ui-react";
import classes from './HomepageHeading.module.css'


const HomepageLayout = () => (
        <React.Fragment>
            <div className={classes.segmentClass}>
            </div>
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
