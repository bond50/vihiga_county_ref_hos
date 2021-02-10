import React from 'react';
import {Grid,Segment} from "semantic-ui-react";
import './TopBar.css';
import Clock from "./Clock/Clock";
import {YearsOperated} from "./YearsOperated/YearsOperated";

const TopBar = () => (
        <Segment className='TopBar' inverted attached>
            <Grid stackable container>
                <Grid.Row>
                    <Grid.Column width={8}>
                    <div>
                        {YearsOperated()} Years Of Efficient And Quality Health Service
                    </div>
                </Grid.Column>
                <Grid.Column width={4} floated='right'>
                    <Clock/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );

export default TopBar;