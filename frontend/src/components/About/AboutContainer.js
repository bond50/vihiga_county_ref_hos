import React from 'react';
import {Container, Grid, Header, Segment} from "semantic-ui-react";
import {segment,header} from './AboutContainer.module.css'

const AboutContainer = ({children, title}) => (
    <Container style={{backgroundColor: "#ffffff"}}>
        <Segment vertical className={segment}>
            <Grid   style={{height: '100vh'}} >
                <Grid.Column>
                    <Header as='h2' className={header}>{title} </Header>
                    {children}
                </Grid.Column>
            </Grid>
        </Segment>
    </Container>
)

export default AboutContainer;