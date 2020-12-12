import React from 'react';
import {
    Button,
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
            <Segment style={{backgroundColor: '#ced3ce'}} attached>
                <Grid stackable container >
                    <Grid.Row >
                        <Grid.Column width={11}>
                            <ImageGallaryComponent/>
                        </Grid.Column>
                        <Grid.Column width={4} >
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
                                    color='youtube'
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
            </Segment>
            <Segment vertical style={{paddingTop: '3em'}}>
                <Grid container stackable>
                    <Grid.Row stretched>
                        <Grid.Column width={11}>
                            <Header as='h3' style={{fontSize: '1.88em'}}>
                                Welcome !!!!
                            </Header>
                            <p style={{fontSize: '1.11em'}}>Vihiga County Referral Hospital (VCRH) has offered services to
                                the people
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
                            <Header as='h3' style={{fontSize: '1.88em'}}>
                                Health Care services
                            </Header>
                            <p style={{fontSize: '1.11em'}}>
                                The County Government of Vihiga is committed to providing equitable, affordable and
                                quality
                                health
                                care of the highest standard to all its residents as stipulated in the Bill of Rights in
                                the
                                Constitution 2010.
                            </p>
                            <Header as='h3' style={{fontSize: '1.88em'}}>
                                How we achieved as a department
                            </Header>
                            <p style={{fontSize: '1.11em'}}>
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
            <Segment vertical style={{paddingTop: '3em '}}>
                <Grid container stackable>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Header as='h3' style={{fontSize: '1.88em'}}>
                                Summery Of Strategic Plan Objectives
                            </Header>
                            <p style={{fontSize: '1.11em'}}>
                                The VCRH 2018-2022 strategic plan entailed objectives to improve service delivery to
                                a status commensurate with a level 5 referral hospital. They were drawn from the WHO pillars
                                of strengthening health systems. Consequently, the strategic objectives of the strategic
                                plan
                                were:
                            </p>
                            <List as='ul'>
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
                            </List>
                            <div style={{textAlign: 'center', padding: '2em'}}>
                                <Button size='large' as={Link} to='/strategic' style={{fontSize: '1.33em'}}>See
                                    more </Button>
                            </div>
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
            <Segment vertical style={{padding: "0em"}} celled  attached>
                <Grid columns='equal' stackable  container>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{padding: '2em 0em'}}>
                            <Header as='h3' style={{fontSize: '1.88em'}} >
                                Our Mission
                            </Header>
                            <p style={{fontSize: '1.11em'}}>A facility of choice in health care provision</p>
                        </Grid.Column>
                        <Grid.Column style={{padding: '2em 0em'}}>
                            <Header as='h3' style={{fontSize: '1.88em'}} >
                                Our Vision
                            </Header>
                            <p style={{fontSize: '1.11em'}}>
                                To provide quality preventive,<br/> curative and rehabilitative health care services.</p>
                        </Grid.Column>
                        <Grid.Column style={{padding: '2em 0em'}}>
                            <Header as='h3' style={{fontSize: '1.88em'}} inverted>
                                Core Values
                            </Header>
                            <div style={{fontSize: '1.11em'}}>
                                <List as='ul'>
                                    <List.Item>Accountability</List.Item>
                                    <List.Item>Commitment</List.Item>
                                    <List.Item>Integrity</List.Item>
                                    <List.Item>Teamwork</List.Item>
                                    <List.Item>Innovation</List.Item>
                                </List>

                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    )
;

export default HomepageLayout
