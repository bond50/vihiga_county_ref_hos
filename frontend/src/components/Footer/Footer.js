import React from 'react';
import {Container, Grid, Header, List, Segment, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Footer = () => (
    <Segment inverted vertical style={{padding: '5em 0em', backgroundColor: '#2cc72e'}} >
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row >
                    <Grid.Column width={6}>
                        <Header inverted as='h5' content='VIHIGA COUNTY REFERRAL HOSPITAL' icon='hospital '/>
                        <List  inverted as='ul'>
                            <List.Item >
                                <Icon name='book' style={{marginRight: "0.2em"}}/> P.O Box 1069 -50300 , Maragoli
                            </List.Item>
                            <List.Item >
                                <Icon name='mobile' style={{marginRight: "0.2em"}}/>
                                Cell:+254-723103564/+254-056-51558
                            </List.Item>
                            <List.Item >
                                <Icon name='ambulance' style={{marginRight: "0.2em"}}/> Ambulance:+254-723103564
                            </List.Item>
                            <List.Item >
                                <Icon name='envelope outline'
                                      style={{marginRight: "0.2em"}}/> Email:vihigahospital@gmail.com
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h5' content='SERVICES' icon='cogs'/>
                        <List  inverted as='ul'>
                            <List.Item as={Link} to='/services/departments/directorates'>Directorates</List.Item>
                            <List.Item as={Link} to='/services/departments/laboratory'>Laboratory</List.Item>
                            <List.Item as={Link} to='/services/departments/pharmacy'>Pharmacy</List.Item>
                            <List.Item as={Link} to='/services/departments/radiology'>Radiology and imaging
                                services
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header inverted as='h5' content='CONTACT US' icon='address book'/>
                        <List  inverted as='ul'>
                            <List.Item as={Link} to='/contact'>Drop Us a Message</List.Item>
                            <List.Item as={Link} to='/feedback/'>Feedback Form</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h5' content='EXTERNAL LINKS' icon='linkify'/>
                        <List link inverted as='ul'>
                            <List.Item ><a href='https://vihiga.go.ke/'>Vihiga County Website</a> </List.Item>
                            <List.Item ><a href='https://health.go.ke/'>M.O.H website</a> </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
);

export default Footer;
