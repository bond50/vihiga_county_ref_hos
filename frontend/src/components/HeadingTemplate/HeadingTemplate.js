import React from 'react';
import {Segment} from "semantic-ui-react";


const HeadingTemplate = ({children,className}) => (
    <Segment
        textAlign='center'
        vertical
        inverted
        className={className}
        >
        {children}
    </Segment>
)

export default HeadingTemplate;