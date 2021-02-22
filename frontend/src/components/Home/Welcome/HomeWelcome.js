import React from 'react';
import {Button, Divider, Grid, Icon, Segment} from "semantic-ui-react";
import ImageGallaryComponent from "../Slider/corousel";
import classes from "./HomeWelcome.module.css";
import {YearsOperated} from "../../navigation/Topbar/YearsOperated/YearsOperated";
import {Link} from "react-router-dom";

const HomeWelcome = () => (
    <Segment vertical className={classes.segment}>
        <Grid stackable divided='vertically' relaxed>
            <Grid.Row className={classes.row} >
                <Grid.Column width={10} className={classes.col}>
                    <h1>
                        Welcome To Vihiga County Referral Hospital
                    </h1>
                    <p>Vihiga County Referral Hospital (VCRH) has offered services to the people of Vihiga and its
                        environs for the last {YearsOperated()} years. At inception it was referred to as the Vihiga
                        District Hospital and later renamed following devolution of health services in Kenya.
                    </p>
                    <p>VCRH
                        first opened it doors to the public in the year 2001 under the ministry of health . In
                        August 2017, the facility was gazetted to be a level 5 referral hospital. With this new
                        status came the need to upgrade the quality and scope of service offered to clients at the
                        facility and region as a whole</p>
                    <p>
                        We are committed to providing equitable, affordable and
                        quality
                        health
                        care of the highest standard to all our residents as stipulated in the Bill of Rights in
                        the
                        Constitution 2010.
                    </p>
                </Grid.Column>
                <Grid.Column width={6} floated='right' className={classes.col}>
                    <ImageGallaryComponent/>
                    <Divider/>
                    <Button primary animated fluid as={Link} to='/media-center/gallery'>
                        <Button.Content visible>
                            <Icon name='angle double right'/>
                        </Button.Content>
                        <Button.Content hidden>
                            Click To See More
                        </Button.Content>
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>

);

export default HomeWelcome;