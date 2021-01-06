import React from 'react';
import {Button, Header, Icon, List, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import classes from "./HomepageHeading.module.css";

const HomeAchieved = () => (
             <Segment vertical className={classes.segment}>
                <Header as='h2' >
                    How we achieved as a department
                </Header>
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
                <Header as='h2' >
                    Some of roles we play in the county
                </Header>
                <List style={{fontSize: '1.11em'}} as='ul'>
                    <List.Item as='a'>
                        <List.Content>
                            <List.Header >
                                 County referral hospital
                            </List.Header>
                            <List.Description>
                                We act as County referral hospital for 3 sub county hospitals and as an intermediary to
                                national and teaching referral hopitals
                            </List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item as='a'>
                        <List.Content>
                            <List.Header >
                                County Center
                            </List.Header>
                            <List.Description>
                                We serve as County center for provision of specialised health care
                            </List.Description>
                        </List.Content>
                    </List.Item>

                  <List.Item as='a'>
                        <List.Content>
                            <List.Header >
                                Teaching and training
                            </List.Header>
                            <List.Description>
                                We offer teaching and training for for health care personnel such as nurses,medical
                                interns,pharmacist interns,pharmaceutical technologist interns,laboratory
                                technologists,nutritionists, health records and information officers ....
                            </List.Description>
                        </List.Content>
                    </List.Item>
                </List>
                <Button as={Link} to='/about/roles' animated basic>
                    <Button.Content visible>See more <Icon name='angle double right'/></Button.Content>
                    <Button.Content hidden><Icon name='arrow right'/></Button.Content>
                </Button>
            </Segment>

    );

export default HomeAchieved;