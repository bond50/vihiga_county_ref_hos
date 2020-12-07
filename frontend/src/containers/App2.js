import React from 'react';
import {Grid, Segment} from "semantic-ui-react";

const App2 = () => {
    return (
        <Grid columns={2} stackable>
            <Grid.Column>
                <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Column width={10}>
                <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column width={6}>
                <Segment>Content</Segment>
            </Grid.Column>
        </Grid>
    );
};

export default App2;