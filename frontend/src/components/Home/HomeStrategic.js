import React from 'react';
import {Button, Divider, Grid, Header, Icon, Image, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import image from "../../assets/plan/strategic.jpg";
import classes from "./HomepageHeading.module.css";

const HomeStrategic = () => {

    return (
        <Segment vertical className={classes.segment} >
            <Grid stackable divided='vertically' >
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Image src={image}/>
                    </Grid.Column>
                    <Grid.Column width={10} floated='right'>
                        <Header as='h2' inverted>
                            Strategic plan 2018-2022
                        </Header>
                        <Divider hidden/>

                        <p>
                            VCRH undertook the process to develop a strategic plan for the year2018-2022.
                            The entire hospital staff participated in carring out of a situational analysis that
                            set
                            up the basis of development of the plan ....

                        </p>
                        <Button as={Link} to='/about/plan' animated  >
                            <Button.Content visible> More <Icon name='angle double right'/> </Button.Content>
                            <Button.Content hidden> <Icon name='arrow right'/></Button.Content>
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default HomeStrategic;