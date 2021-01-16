import React, {Fragment} from 'react';
import {Grid, Header, Segment} from "semantic-ui-react";
import {segment} from './AboutContainer.module.css'


const AboutContainer = ({children, title}) => (
    <Fragment>
        <Segment vertical className={segment}>
            <Grid container>
                <Grid.Column>
                    <Header as='h3'>{title} </Header>
                    {children}
                </Grid.Column>
            </Grid>
        </Segment>
    </Fragment>
)

export default AboutContainer;