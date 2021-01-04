import React from 'react';
import {
    Button,
    Divider,
    Grid,
    Header,
    Image,
    Segment,
    Container, Icon, List, Embed
} from 'semantic-ui-react';
import image from '../../assets/plan/strategic.jpg'
import ImageGallaryComponent from "./corousel";
import {Link} from "react-router-dom";
import HomepageHeading from "./HomepageHeading";
import logo from '../../assets/logo/logo.png'


const HomepageLayout = () => (
        <>
            <Segment
                basic
                textAlign='center'
                vertical>
                <HomepageHeading/>
            </Segment>

            <Segment vertical style={{padding: ' 2em'}}>
                <Grid container stackable verticalAlign='middle' divided='vertically'>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Header as='h1' style={{color: "#0093da"}}>
                                Welcome To Vihiga County Referral Hospital
                            </Header>
                            <Divider hidden/>
                            <p>
                                <strong><em>We Take Care Of Your Precious Health.</em></strong>
                                We are committed to providing equitable, affordable and
                                quality
                                health
                                care of the highest standard to all our residents as stipulated in the Bill of Rights in
                                the
                                Constitution 2010.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={6} floated='right'>
                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{margin: '1em 0em'}}
                            >
                                <Link to='/media-center/gallery'>Click for more</Link>
                            </Divider>
                            <ImageGallaryComponent/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical basic>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <Container>
                                <Divider
                                    as='h3'
                                    className='header'
                                    horizontal
                                    style={{margin: '1em 0em'}}
                                >
                                    About us
                                </Divider>

                                <p>Vihiga County Referral
                                    Hospital (VCRH)
                                    has offered services to
                                    the people
                                    of Vihiga and its environs for the last 20 years. At inception it was referred to as
                                    the
                                    Vihiga
                                    District Hospital and later renamed following devolution of health services in
                                    Kenya. In
                                    August
                                    2017, the facility was gazetted to be a level 5 referral hospital. With this new
                                    status
                                    came
                                    the
                                    need to upgrade the quality and scope of service offered to clients at the facility
                                    and
                                    region
                                    as a
                                    whole
                                </p>
                            </Container>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{padding: '2em 0em'}} vertical basic verticalAlign='center'>
                <Container>
                    <Header as='h3' style={{  color: "#38aed0"}}>
                        How we achieved as a department
                    </Header>
                    <p >
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
                    <Header as='h3' style={{ color: "#38aed0"}}>
                        Some of roles we play in the county
                    </Header>
                    <List style={{fontSize: '1.33em'}}>
                        <List.Item as='a'>
                            <Icon name='right triangle'/>
                            <List.Content>
                                <List.Header >
                                    <em> County referral hospital</em>
                                </List.Header>
                                <List.Description>
                                    We act as County referral hospital for 3 sub county hospitals and as an intermediary to
                                    national and teaching referral hopitals
                                </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item as='a'>
                            <Icon name='right triangle'/>
                            <List.Content>
                                <List.Header >
                                    <em> County Center</em>
                                </List.Header>
                                <List.Description>
                                    We serve as County center for provision of specialised health care
                                </List.Description>
                            </List.Content>
                        </List.Item>

                        <List.Item as='a'>
                            <Icon name='right triangle'/>
                            <List.Content>
                                <List.Header >
                                    <em>Teaching and training</em>
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

                </Container>
            </Segment>

            <Segment vertical basic>
                <Grid stackable container verticalAlign='middle' divided='vertically' style={{paddingTop: '4em'}}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{margin: '1em 0em'}}
                            >
                                <Link to='/media-center/gallery'>Click for more</Link>
                            </Divider>
                            <Image src={image}/>
                        </Grid.Column>
                        <Grid.Column width={10} floated='right'>
                            <Header as='h3' style={{color: "orange"}}>
                                Strategic plan 2018-2022
                            </Header>
                            <Divider hidden/>

                            <p>
                                <em>VCRH undertook the process to develop a strategic plan for the year2018-2022.
                                    The entire hospital staff participated in carring out of a situational analysis that set
                                    up the basis of development of the plan ....
                                </em>
                            </p>
                            <Button as={Link} to='/about/plan' animated >
                                <Button.Content visible> More <Icon name='angle double right'/> </Button.Content>
                                <Button.Content hidden> <Icon name='arrow right'/></Button.Content>
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Container>
                <Segment vertical>
                    <Grid stackable style={{padding: '4em'}} columns='equal'>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h3' style={{color: '#38aed0'}}>
                                    Our Mission
                                </Header>
                                <p style={{fontSize: '1.11em'}}>A facility of choice in health care provision</p>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h3' style={{ color: '#38aed0'}}>
                                    Our Vision
                                </Header>
                                <p >
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
            </Container>
        </>
    )
;

export default HomepageLayout
