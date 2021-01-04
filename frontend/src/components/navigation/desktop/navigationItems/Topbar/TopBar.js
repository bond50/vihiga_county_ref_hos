import React from 'react';
import {Grid, Segment} from "semantic-ui-react";
import './TopBar.css';
import Clock from "./Clock/Clock";
import YearsOperated from "./YearsOperated/YearsOperated";

const TopBar = () => (
        <Segment className='TopBar' inverted attached>
            <Grid stackable container>
                <Grid.Column width={8}>
                    <YearsOperated/>
                </Grid.Column>
                <Grid.Column width={4} floated='right'>
                    <Clock/>
                </Grid.Column>
            </Grid>
        </Segment>
    );

export default TopBar;