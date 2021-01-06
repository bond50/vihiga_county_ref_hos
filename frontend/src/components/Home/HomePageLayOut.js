import React from 'react';
import HomepageHeading from "./HomepageHeading";

import HomeAbout from "./HomeAbout";
import HomeAchieved from "./HomeAchieved";
import HomeStrategic from "./HomeStrategic";
import HomePrincipals from "./HomePrincipals";
import HomeWelcome from "./HomeWelcome";


const HomepageLayout = () => (
         <React.Fragment>
            <HomepageHeading/>
            <HomeWelcome/>
            <HomeAbout/>
            <HomeAchieved/>
            <HomeStrategic/>
            <HomePrincipals/>
        </React.Fragment>
    )
;

export default HomepageLayout
