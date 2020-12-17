import React from 'react';
import {Grid, Header, Segment} from "semantic-ui-react";

const AboutContainer = ({children, title}) => <Segment style={{padding: '6.5em 0em'}} vertical>
    <Grid container colums={1}>
        <Grid.Column>
            <Header as='h3'>{title}</Header>
            {children}
        </Grid.Column>
    </Grid>

</Segment>


export default AboutContainer;