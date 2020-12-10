import React from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Embed,
    Image,
    List,
    Message,
    Segment,
} from 'semantic-ui-react';
import image from '../../assets/plan/strategic.jpg'
import ImageGallaryComponent from "./corousel";
import {Link} from "react-router-dom";
import image2 from '../../assets/1.jpg'

const HomepageLayout = () => (
        <>
            <Container style={{paddingTop: '0.3em'}}>
                <Grid stackable>
                    <Grid.Row stretched>
                        <Grid.Column width={11}>
                            <ImageGallaryComponent/>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Segment attached>
                                <Divider
                                    as='h3'
                                    style={{fontSize: '1.4em'}}
                                    className='header'
                                    horizontal>
                                    <Link to='#'>Documentaries</Link>
                                </Divider>
                            </Segment>
                            <Segment attached>
                                <Embed
                                    id='E9a2xRUyfHw'
                                    autoPlay={false}
                                    placeholder={image2}
                                    active
                                    source='youtube'
                                    hd={true}
                                    iframe={{
                                        allowFullScreen: true,
                                        style: {
                                            padding: 10,
                                        },
                                    }}
                                />
                            </Segment>

                            <Segment attached>
                                <Embed
                                    id='RZg0zphSbQc'
                                    placeholder={image2}
                                    source='youtube'
                                    hd={true}
                                    iframe={{
                                        allowFullScreen: true,
                                        style: {
                                            padding: 10,
                                        },
                                    }}
                                />
                            </Segment>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <Segment vertical style={{paddingTop: '6em '}}>
                <Grid container stackable>
                    <Grid.Row stretched>
                        <Grid.Column width={11}>
                            <Header as='h3' style={{fontSize: '2em'}}>
                                Welcome !!!!
                            </Header>
                            <p>Vihiga County Referral Hospital (VCRH) has offered services to the people
                                of Vihiga and its environs for the last 20 years. At inception it was referred to as the
                                Vihiga
                                District Hospital and later renamed following devolution of health services in Kenya. In
                                August
                                2017, the facility was gazetted to be a level 5 referral hospital. With this new status
                                came
                                the
                                need to upgrade the quality and scope of service offered to clients at the facility and
                                region
                                as a
                                whole
                            </p>
                            <Header as='h3' style={{fontSize: '2em'}}>
                                Health Care services
                            </Header>
                            <p>
                                The County Government of Vihiga is committed to providing equitable, affordable and
                                quality
                                health
                                care of the highest standard to all its residents as stipulated in the Bill of Rights in
                                the
                                Constitution 2010.
                            </p>
                            <Header as='h3' style={{fontSize: '2em'}}>
                                How we achieved as a department
                            </Header>
                            <p>
                                The department of health services developed a county
                                health
                                strategic plan for 2018-2022 which provides a road map of how the Health Department
                                intends
                                to
                                provide Health Services in an enabling environment.</p>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Segment attached>
                                <Divider
                                    as='h3'
                                    className='header'
                                    horizontal
                                    style={{margin: '1em 0em'}}
                                >
                                    <Link to='#'>News and Updates</Link>
                                </Divider>
                            </Segment>
                            <Message segment
                                     attached
                                     header="Our Accident And Emergency Unit Is Now Fully Functional"
                                     content="ICU is complete and will be Launched Soon ."
                            />
                            <Message attached>
                                <Message.Header>Changes in Service</Message.Header>
                                <Message.List>
                                    Did you know that you can now pay all your bills via Mpesa? We have introduced
                                    Mobile
                                    payment not only to improve our services but also to avoid physical handling of
                                    money
                                    inorder to prevent the spread of COVID19 virus.you can pay via paybill 7757575.
                                </Message.List>
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical attached style={{paddingTop: '6em '}}>
                <Grid container stackable >
                    <Grid.Row >
                        <Grid.Column width={11} >
                            <List>
                                <List.Header as='h3'>
                                    Summery Of Strategic Plan Objectives
                                </List.Header>
                                <p>
                                    The VCRH 2018-2022 strategic plan entailed objectives to improve service delivery to
                                    a
                                    status
                                    commensurate with a level 5 referral hospital. They were drawn from the WHO pillars
                                    of
                                    strengthening health systems. Consequently, the strategic objectives of the
                                    strategic
                                    plan
                                    were:</p>
                                <List.Content>
                                    <List.Item>
                                        <Icon name='right triangle'/>
                                        To have an effective and efficient hospital management, leadership
                                        and
                                        governance system.
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='right triangle'/>
                                        To broaden the scope and enhance the quality of clinical
                                        services.
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='right triangle'/>
                                        To optimize health workforce size, skills, motivation and
                                        distribution.
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='right triangle'/>
                                        To have an efficient health management and information
                                        system
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='right triangle'/>
                                        To modernize and revolutionize health infrastructure.
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='right triangle'/>
                                        To increase resource mobilization, streamline budgeting and
                                        expenditure
                                        processes and strengthen accountability systems
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='right triangle'/>
                                        To ensure availability and rational use of effective, safe and
                                        affordable
                                        health products and technologies.
                                    </List.Item>
                                </List.Content>
                                <Button color='blue'>See more &raquo;</Button>
                            </List>
                        </Grid.Column>
                        <Grid.Column floated='right' width={5}>
                            <Message info attached>
                                <p>some members who were present when we launched our strategic plan</p>
                            </Message>
                            <Image bordered src={image}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment placeholder >
                <Grid columns={3} stackable textAlign='center'>
                    <Divider vertical><Icon name='angle double right'/></Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header as='h3'>
                                Our Mission
                            </Header>
                            <List.Item>A facility of choice in health care provision</List.Item>
                        </Grid.Column>

                        <Grid.Column>
                            <Header as='h3'>
                                Our Vision
                            </Header>
                            <List.Item>
                                <b>To provide quality preventive, curative and rehabilitative health care
                                    services.</b>
                            </List.Item>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    )
;

export default HomepageLayout
