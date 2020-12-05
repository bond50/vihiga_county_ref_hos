import React from 'react';
import {Container, Grid, Header, Segment} from "semantic-ui-react";

const AboutContainer = ({children, title}) => <Container>
    <Segment style={{padding: '2em 0em'}} vertical>

        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Header as='h3'>{title}</Header>
                    {children}
                </Grid.Column>

            </Grid.Row>
        </Grid>

    </Segment>
</Container>

export default AboutContainer;