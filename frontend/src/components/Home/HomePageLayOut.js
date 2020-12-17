import React from 'react';
import {
    Button,
    Divider,
    Grid,
    Header,
    Image,
    Segment,
    Container
} from 'semantic-ui-react';
import image from '../../assets/plan/strategic.jpg'
import ImageGallaryComponent from "./corousel";
import {Link} from "react-router-dom";


const HomepageLayout = () => (
        <>
            <Segment style={{padding: '0.2em'}} attached vertical>
                <Grid stackable container>
                    <Grid.Row only='large screen'>
                        <Grid.Column>
                            <div className='nav-image'>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row only='mobile'>
                        <Grid.Column>
                            <ImageGallaryComponent/>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Segment>
            <Segment vertical style={{paddingTop: '3em'}}>
                <Grid container stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2' className='welcomeHeader'>
                                Welcome To Vihiga County Referral Hospital
                                <Header.Subheader>
                                    We Take Care Of Your Precious Health
                                </Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <p>Vihiga County Referral Hospital (VCRH) has offered services to
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
                            <Header as='h2'>
                                Health Care Services
                            </Header>
                            <p>
                                The County Government of Vihiga is committed to providing equitable, affordable and
                                quality
                                health
                                care of the highest standard to all its residents as stipulated in the Bill of Rights in
                                the
                                Constitution 2010.
                            </p>
                            <Header as='h2'>
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
                        <Grid.Column width={6}>
                            <Container>
                                <Divider
                                    as='h4'
                                    className='header'
                                    horizontal
                                    style={{margin: '1em 0em'}}
                                >
                                    <Link to='#'>News And Updates</Link>
                                </Divider>
                            </Container>
                            <ImageGallaryComponent/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical style={{paddingTop: '3em '}}>
                <Grid container stackable>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Header as='h2'>
                                Summery Of Strategic Plan Objectives
                            </Header>
                            <p>
                                The VCRH 2018-2022 strategic plan entailed objectives to improve service delivery to
                                a status commensurate with a level 5 referral hospital. They were drawn from the WHO pillars
                                of strengthening health systems. Consequently, the strategic objectives of the strategic
                                plan
                                were:
                            </p>
                            <div style={{textAlign: 'center', padding: '1em'}}>
                                <Button size='large' as={Link} to='/about/plan'>See
                                    more
                                </Button>
                            </div>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered src={image}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/*<Segment vertical style={{padding: "0em"}} celled attached>*/}
            {/*    <Grid stackable container columns={11}>*/}
            {/*        <Grid.Row >*/}
            {/*            <Grid.Column style={{padding: '2em 0em'}} >*/}
            {/*                <Header as='h2'>*/}
            {/*                    Our Mission*/}
            {/*                </Header>*/}
            {/*                <p>A facility of choice in health care provision</p>*/}

            {/*                <Header as='h2'>*/}
            {/*                    Our Vision*/}
            {/*                </Header>*/}
            {/*                <p>*/}
            {/*                    To provide quality preventive,<br/> curative and rehabilitative health care services.</p>*/}

            {/*                 <Header as='h2'>*/}
            {/*                    Core Values*/}
            {/*                </Header>*/}
            {/*                <List as='ul'>*/}
            {/*                    <List.Item>Accountability</List.Item>*/}
            {/*                    <List.Item>Commitment</List.Item>*/}
            {/*                    <List.Item>Integrity</List.Item>*/}
            {/*                    <List.Item>Teamwork</List.Item>*/}
            {/*                    <List.Item>Innovation</List.Item>*/}
            {/*                </List>*/}
            {/*            </Grid.Column>*/}
            {/*        </Grid.Row>*/}
            {/*    </Grid>*/}
            {/*</Segment>*/}
        </>
    )
;

export default HomepageLayout
