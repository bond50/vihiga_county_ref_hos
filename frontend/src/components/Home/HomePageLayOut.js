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


const HomepageLayout = () => {

        return (
            <Container>
                <Segment vertical style={{paddingTop: '2em'}}>
                    <Container >
                        <Grid stackable attached>
                            <Grid.Row>
                                <Grid.Column width={11}>
                                    <ImageGallaryComponent/>
                                </Grid.Column>
                                <Grid.Column floated='right' width={5} style={{paddingTop: '0'}}>
                                    <Divider
                                        as='h3'
                                        className='header'
                                        horizontal
                                        style={{margin: '1em 0em'}}
                                    >
                                        <Link to='#'>Documentaries</Link>
                                    </Divider>
                                    <Embed
                                        id='E9a2xRUyfHw'
                                        autoPlay={false}
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
                                    <br/>
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
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
                <Segment style={{padding: ' 1.7em 0'}} vertical attached  >
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Header as='h3'>
                                    Welcome !!!!
                                </Header>
                                <List.Item>Vihiga County Referral Hospital (VCRH) has offered services to the people
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
                                    whole</List.Item>
                                <Header as='h3'>
                                    Health Care services
                                </Header>
                                <List.Item>
                                    The County Government of Vihiga is committed to providing equitable, affordable and
                                    quality
                                    health
                                    care of the highest standard to all its residents as stipulated in the Bill of Rights in
                                    the
                                    Constitution 2010.
                                </List.Item>

                                <Header as='h3'>
                                    How we achieved as a department
                                </Header>
                                <List.Item>
                                    The department of health services developed a county
                                    health
                                    strategic plan for 2018-2022 which provides a road map of how the Health Department
                                    intends
                                    to
                                    provide Health Services in an enabling environment.</List.Item>
                            </Grid.Column>
                            <Grid.Column floated='right' width={5}>
                                <Divider
                                    as='h3'
                                    className='header'
                                    horizontal
                                    style={{margin: '1em 0em'}}
                                >
                                    <Link to='#'>News and Updates</Link>
                                </Divider>
                                <Message positive>
                                    <Message.Header>Our Accident And Emergency Unit Is Now Fully
                                        Functional</Message.Header>
                                    <p>
                                        <b>ICU is complete and will be Launched Soon .</b>
                                    </p>
                                </Message>
                                <Message info  >
                                    <Message.Header>Changes in Service</Message.Header>
                                    <p>
                                        Did you know that you can now pay all your bills via Mpesa? We have introduced
                                        Mobile
                                        payment not only to improve our services but also to avoid physical handling of
                                        money
                                        inorder to prevent the spread of COVID19 virus.you can pay via paybill 7757575.
                                    </p>
                                </Message>
                                <Button primary animated as={Link} to='/news' size='tiny'>
                                    <Button.Content visible>Click for more</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='angle double right'/>
                                    </Button.Content>
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={11}>
                                <Header as='h3'>
                                    Summery Of Strategic Plan Objectives
                                </Header>
                                <p>
                                    The VCRH 2018-2022 strategic plan entailed objectives to improve service delivery to a
                                    status
                                    commensurate with a level 5 referral hospital. They were drawn from the WHO pillars of
                                    strengthening health systems. Consequently, the strategic objectives of the strategic
                                    plan
                                    were:</p>
                                <List as='ol'
                                      style={{paddingBottom: '0.9em', paddingTop: '0.9em'}}
                                      animated
                                      size='small'
                                >
                                    <List.Item as='a' style={{color: 'inherit'}}>
                                        <Icon name='right triangle'/>
                                        To have an effective and efficient hospital management, leadership
                                        and
                                        governance system.
                                    </List.Item>
                                    <List.Item as='a' style={{color: 'inherit'}}>
                                        <Icon name='right triangle'/>
                                        To broaden the scope and enhance the quality of clinical
                                        services.
                                    </List.Item>
                                    <List.Item as='a' style={{color: 'inherit'}}>
                                        <Icon name='right triangle'/>
                                        To optimize health workforce size, skills, motivation and
                                        distribution.
                                    </List.Item>
                                    <List.Item as='a' style={{color: 'inherit'}}>
                                        <Icon name='right triangle'/>
                                        To have an efficient health management and information
                                        system
                                    </List.Item>
                                    <List.Item as='a' style={{color: 'inherit'}}>
                                        <Icon name='right triangle'/>
                                        To modernize and revolutionize health infrastructure.
                                    </List.Item>
                                    <List.Item as='a' style={{color: 'inherit'}}>
                                        <Icon name='right triangle'/>
                                        To increase resource mobilization, streamline budgeting and
                                        expenditure
                                        processes and strengthen accountability systems
                                    </List.Item>
                                    <List.Item as='a' style={{color: 'inherit'}}>
                                        <Icon name='right triangle'/>
                                        To ensure availability and rational use of effective, safe and
                                        affordable
                                        health products and technologies.
                                    </List.Item>
                                </List>
                                <Button basic color='blue' animated as={Link} to='/covid-19/prep' size='tiny'>
                                    <Button.Content visible>Click to download our strategic plan here</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='download'/>
                                    </Button.Content>
                                </Button>
                            </Grid.Column>
                            <Grid.Column floated='right' width={5} style={{paddingTop: '0'}}>
                                <Message info attached>
                                    <p>some members who were present when we launched our strategic plan</p>
                                </Message>
                                <Image bordered src={image}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment  vertical attached>
                    <Container>
                        <Grid celled columns='equal' stackable>
                            <Grid.Row textAlign='center'>
                                <Grid.Column style={{paddingBottom: '0.9em', paddingTop: '0.9em'}}>
                                    <Header as='h3'>
                                        Our Mission
                                    </Header>
                                    <List.Item><b>A facility of choice in health care provision</b>
                                    </List.Item>
                                </Grid.Column>
                                <Grid.Column style={{paddingBottom: '0.9em', paddingTop: '0.9em'}}>
                                    <Header as='h3'>
                                        Our Vision
                                    </Header>
                                    <List.Item>
                                        <b>To provide quality preventive, curative and rehabilitative health care
                                            services.</b>
                                    </List.Item>
                                </Grid.Column>
                                <Grid.Column style={{paddingBottom: '0.9em', paddingTop: '0.9em', textAlign: "left"}}>
                                    <Header as='h3'>
                                        Core Values
                                    </Header>
                                    <List as='ol' size='small'>
                                        <List.Item as='a' style={{color: 'inherit'}}>
                                            <Icon name='right triangle'/>
                                            Accountability
                                        </List.Item>
                                        <List.Item as='a' style={{color: 'inherit'}}>
                                            <Icon name='right triangle'/>
                                            Commitment
                                        </List.Item>
                                        <List.Item as='a' style={{color: 'inherit'}}>
                                            <Icon name='right triangle'/>
                                            Integrity
                                        </List.Item>
                                        <List.Item as='a' style={{color: 'inherit'}}>
                                            <Icon name='right triangle'/>
                                            Teamwork
                                        </List.Item>
                                        <List.Item as='a' style={{color: 'inherit'}}>
                                            <Icon name='right triangle'/>
                                            Innovation
                                        </List.Item>
                                        <List.Item as='a' style={{color: 'inherit'}}>
                                            <Icon name='right triangle'/>
                                            Professionalism
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>

            </Container>
        );
    }
;

export default HomepageLayout
