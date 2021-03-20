import React from 'react';
import {Container, Grid, Header, Segment} from "semantic-ui-react";
import {segment} from './AboutContainer.module.css'


const AboutContainer = ({children, title}) => (
        <Container>
            <Segment vertical className={segment}>
                <Grid>
                    <Grid.Column>
                        <Header as='h2'>{title} </Header>
                        {children}
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
)

export default AboutContainer;