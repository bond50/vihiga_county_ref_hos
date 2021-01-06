import React from 'react';
import {Button, Icon, List, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import classes from "./HomepageHeading.module.css";

const HomeRoles = () => {
    const assignedClasses = [classes.segment, classes.callout, classes.blue]
    return (
        <Segment vertical className={assignedClasses.join(' ')} inverted>
            <h1 className={classes.header}>
                Some of roles we play in the county
            </h1>
            <List as='ul' inverted>
                <List.Item as='a'>
                    <List.Content>
                        <List.Header>
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
                        <List.Header>
                            County Center
                        </List.Header>
                        <List.Description>
                            We serve as County center for provision of specialised health care
                        </List.Description>
                    </List.Content>
                </List.Item>

                <List.Item as='a'>
                    <List.Content>
                        <List.Header>
                            Teaching and training
                        </List.Header>
                        <List.Description>
                            We offer teaching and training for for health care personnel such as nurses,medical
                            interns,pharmacist interns,pharmaceutical technologist interns,laboratory
                            technologists,nutritionists, health records and information officers ....
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Button as={Link} to='/about/roles' animated basic inverted>
                        <Button.Content visible>See more <Icon name='angle double right'/></Button.Content>
                        <Button.Content hidden><Icon name='arrow right'/></Button.Content>
                    </Button>
                </List.Item>
            </List>

        </Segment>

    );
};

export default HomeRoles;