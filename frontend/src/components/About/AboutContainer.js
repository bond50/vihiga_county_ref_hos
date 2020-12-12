import React from 'react';
import { Grid, Header, Segment} from "semantic-ui-react";

const AboutContainer = ({children, title}) => <Segment style={{padding: '2em 0em'}} vertical>
        <Grid container>
            <Grid.Row>
                <Grid.Column style={{padding:'0em 2.5em '}}>
                    <Header as='h3'>{title}</Header>
                    {children}
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Segment>


export default AboutContainer;