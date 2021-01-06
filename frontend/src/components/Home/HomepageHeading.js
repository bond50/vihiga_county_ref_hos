import React from 'react';
import { Segment} from "semantic-ui-react";
import  classes from './HomepageHeading.module.css';

const HomepageHeading = ({mobile}) => (
        <Segment textAlign='center' vertical className={classes.segmentAfterNav}>
            <div className={classes.navImage}>
            </div>
        </Segment>


)

export default HomepageHeading;