import React from 'react';
import {Grid, Header, Image, Segment} from "semantic-ui-react";
import logo from "../../assets/logo/logo.png";
import classes from "./HomepageHeading.module.css";

const HomePrincipals = () => {

    return (
        <Segment inverted  vertical className={classes.segment} style={{backgroundColor: '#2185d0'}}>
            <Grid stackable columns='equal'>
                <Grid.Column
                    style={{backgroundColor: '#2cc72e', marginRight: '1em', padding: '3em', textAlign: 'center'}}>
                    <h2>
                        Our Core Values
                    </h2>
                    <p>Accountability</p>
                    <p>Commitment</p>
                    <p>Integrity</p>
                    <p>Teamwork</p>
                    <p>Innovation</p>
                </Grid.Column>

                <Grid.Column
                    style={{backgroundColor: '#2cc72e', marginRight: '1em', padding: '3em', textAlign: 'center'}}>
                    <h2>
                        Our Vision
                    </h2>
                    <p>
                        To provide quality preventive,<br/>
                        curative and rehabilitative health care services.
                    </p>
                </Grid.Column>
                  <Grid.Column
                    style={{backgroundColor: '#2cc72e', padding: '3em', textAlign: 'center'}}>
                    <h2>
                        Our Vision
                    </h2>
                    <p>
                        To provide quality preventive,<br/>
                        curative and rehabilitative health care services.
                    </p>
                </Grid.Column>
            </Grid>
        </Segment>

    );
};

export default HomePrincipals;