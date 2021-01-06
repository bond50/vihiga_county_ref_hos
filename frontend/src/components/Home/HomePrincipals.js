import React from 'react';
import { Grid, Header, Image, Segment} from "semantic-ui-react";
import logo from "../../assets/logo/logo.png";
import classes from "./HomepageHeading.module.css";

const HomePrincipals = () => (

           <Segment vertical className={classes.segment}>
                <Grid stackable columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2' >
                                Our Mission
                            </Header>
                            <p style={{fontSize: '1.11em'}}>A facility of choice in health care provision</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2' >
                                Our Vision
                            </Header>
                            <p>
                                To provide quality preventive,<br/>
                                curative and rehabilitative health care services.
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logo} bordered size='medium'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

    );

export default HomePrincipals;