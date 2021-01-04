import React from 'react';
import {Grid, Header, Segment} from "semantic-ui-react";

const AboutContainer = ({children, title}) => <Segment style={{padding: '3.5em 0em'}} vertical>
    <Grid container colums={1}  verticalAlign='top'>
        <Grid.Column>
            <Header as='h3'>{title}</Header>
            {children}
        </Grid.Column>
    </Grid>

</Segment>


export default AboutContainer;