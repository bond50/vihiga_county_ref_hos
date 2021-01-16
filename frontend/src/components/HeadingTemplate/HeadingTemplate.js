import React from 'react';
import {Segment} from "semantic-ui-react";
import classes from './HeadingTemplate.module.css';

const HeadingTemplate = ({children}) => (
    <Segment textAlign='center' vertical className={classes.segmentAfterNav} >
        {children}
    </Segment>

)

export default HeadingTemplate;