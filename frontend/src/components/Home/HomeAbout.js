import React from 'react';
import {Grid, Header, Segment} from "semantic-ui-react";
import {YearsOperated} from "../navigation/desktop/navigationItems/Topbar/YearsOperated/YearsOperated";
import classes from './HomepageHeading.module.css'

const HomeAbout = () => (
        <Segment vertical className={classes.segment}>
            <Grid celled='internally' stackable>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <p>
                            Latest News
                        </p>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header as='h2'>About us</Header>
                        <p>Vihiga County Referral Hospital (VCRH) has offered services to the people of Vihiga and its
                            environs for the last {YearsOperated()} years. At inception it was referred to as the Vihiga
                            District Hospital and later renamed following devolution of health services in Kenya.VCRH
                            first opened it doors to the public in the year 2001 under the ministry of health . In
                            August 2017, the facility was gazetted to be a level 5 referral hospital. With this new
                            status came the need to upgrade the quality and scope of service offered to clients at the
                            facility and region as a whole
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

    );

export default HomeAbout;