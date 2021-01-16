import React from 'react';
import {Button, Icon, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import classes from "../HomepageHeading.module.css";

const HomeAchieved = () => (
             <Segment vertical className={classes.segment}>
                <h1 >
                    How we achieved as a department
                </h1>
                <p>
                    The department of health services developed a county
                    health
                    strategic plan for 2018-2022 which provides a road map of how the Health Department
                    intends
                    to
                    provide Health Services in an enabling environment.</p>
                <Button as={Link} to='/about/plan' animated>
                    <Button.Content visible>See more </Button.Content>
                    <Button.Content hidden><Icon name='arrow right'/></Button.Content>
                </Button>
            </Segment>

    );

export default HomeAchieved;