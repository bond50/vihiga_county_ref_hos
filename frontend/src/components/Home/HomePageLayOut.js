import React from 'react';
import HomepageHeading from "./HomepageHeading";

import HomeAbout from "./HomeAbout";
import HomeAchieved from "./HomeAchieved";
import HomeStrategic from "./HomeStrategic";
import HomePrincipals from "./HomePrincipals";
import HomeWelcome from "./HomeWelcome";
import HomeRoles from "./HomeRoles";


const HomepageLayout = () => (
         <React.Fragment>
            <HomepageHeading/>
            <HomeWelcome/>
            <HomeAbout/>
            <HomeAchieved/>
            <HomeStrategic/>
            <HomePrincipals/>
            <HomeRoles/>
        </React.Fragment>
    )
;

export default HomepageLayout
