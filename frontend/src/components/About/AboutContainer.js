import React from 'react';
import { Grid, Header, Segment} from "semantic-ui-react";
import {segment} from './AboutContainer.module.css'

const AboutContainer = ({children, title}) => (
        <Segment vertical className={segment}>
            <Grid>
                <Grid.Column>
                    <Header as='h3' >{title} </Header>
                    {children}
                </Grid.Column>
            </Grid>
        </Segment>
)

export default AboutContainer;