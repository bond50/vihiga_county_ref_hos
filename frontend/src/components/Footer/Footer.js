import React, {Fragment} from 'react';
import {
    Grid,
    Header,
    List,
    Segment,
    Icon,
    Button,
    Container,
    Divider,
    Image,
    Embed,
    Input,
    Card
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXRay, faMicroscope, faCapsules} from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import {Carousel} from "react-responsive-carousel";


const Footer = () => (
    <Fragment>

        <Segment inverted vertical style={{backgroundColor: '#002e2e'}}>
            <Container>
                <Grid stackable columns='equal' textAlign='center' verticalAlign='middle'>
                    <Grid.Column as={Link} to='/services/departments/pharmacy' style={{color: '#fff'}}>

                        <Divider
                            as='h5'
                            inverted
                            className='header'
                            horizontal
                        >
                            PHARMACY
                        </Divider>

                        <p>Quality Medicines</p>
                        <FontAwesomeIcon icon={faCapsules} size='10x'/>
                    </Grid.Column>
                    <Grid.Column as={Link} to='/services/departments/radiology' style={{color: '#fff'}}>
                        <Divider
                            as='h5'
                            inverted
                            className='header'
                            horizontal
                        >
                            RADIOLOGY

                        </Divider>
                        <p>The best Ct Scan in the region</p>
                        <FontAwesomeIcon icon={faXRay} size='10x'/>

                    </Grid.Column>
                    <Grid.Column as={Link} to='/services/departments/laboratory' style={{color: '#fff'}}>
                        <Divider
                            as='h5'
                            inverted
                            className='header'
                            horizontal
                        >
                            LABORATORY

                        </Divider>
                        <p>Most accurate results</p>
                        <FontAwesomeIcon icon={faMicroscope} size='10x'/>
                    </Grid.Column>

                </Grid>
            </Container>
        </Segment>
        <Segment
            inverted
            vertical
            style={{padding: '5em 0em'}} className='pattern'>

            <div className='sesgoarriba-small'>

            </div>
            <div className='sesgoabajo-small'>

            </div>
            <Container>
                <Grid divided doubling inverted columns={4}>
                    <Grid.Row>
                        <Grid.Column>
                            <Header inverted as='h4' content='Vihiga County Referral Hospital'/>
                            <List link inverted>
                                <List.Item>
                                    Off Kisumu road,Mbale
                                </List.Item>
                                <List.Item>
                                    Opposite Distruct Headquaters
                                </List.Item>
                                <List.Item>
                                    P.O Box 1069 -50300, Maragoli
                                </List.Item>
                                <List.Item>
                                    Cell:+254-723103564/+254-056-51558
                                </List.Item>
                                <List.Item>
                                </List.Item>
                                <List.Item>
                                    Email:vihigahospital@gmail.com
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Services' icon='cogs'/>
                            <List inverted as='ul' link>
                                <List.Item as={Link} to='/services/departments/directorates'>Directorates</List.Item>
                                <List.Item as={Link} to='/services/departments/laboratory'>Laboratory</List.Item>
                                <List.Item as={Link} to='/services/departments/pharmacy'>Pharmacy</List.Item>
                                <List.Item as={Link} to='/services/departments/radiology'>Radiology and imaging
                                    services
                                </List.Item>
                            </List>
                            <Header inverted as='h4' content='Quick Links' icon='staylinked'/>
                            <List inverted as='ul' link>
                                <List.Item as={Link} to='/about/mission'>Our Mission</List.Item>
                                <List.Item as={Link} to='/about/management/board'>Meet Our Team</List.Item>
                                <List.Item as={Link} to='/about/management/organogram'>Organogram</List.Item>
                                <List.Item as={Link} to='/about/roles'>Roles</List.Item>
                                <List.Item as={Link} to='/about/goals'>Goals</List.Item>
                                <List.Item as={Link} to='/about/plan'>Strategic plan</List.Item>
                                <List.Item as={Link} to='/about/partners'>Partners</List.Item>
                                <List.Item as={Link} to='/blog'> Blog</List.Item>

                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='Contact Us' icon='address book'/>
                            <List inverted link as='ul'>
                                <List.Item as={Link} to='/contact'>Drop Us a Message</List.Item>
                                <List.Item as={Link} to='/feedback/'>Feedback Form</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header inverted as='h4' content='External Links' icon='linkify'/>
                            <List inverted as='ul'>
                                <List.Item><a href='https://vihiga.go.ke/'>Vihiga County Website</a> </List.Item>
                                <List.Item><a href='https://health.go.ke/'>M.O.H website</a> </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider inverted section/>

                <Grid columns={5} doubling>
                    <Grid.Column>
                        <Button color='facebook' size='tiny' as='a' href='https://facebook.com'>
                            <Icon name='facebook'/> Official Facebook Page
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button color='twitter' size='tiny' as='a' href='https://twitter.com/?lang=en'>
                            <Icon name='twitter'/> Our Twitter Account
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button color='instagram' size='tiny' as='a' href='https://www.instagram.com'>
                            <Icon name='instagram'/>Follow us on Instagram
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button color='youtube' size='tiny' as='a' href='https://youtube.com'>
                            <Icon name='youtube'/> Our YouTube Channel
                        </Button>
                    </Grid.Column>
                </Grid>
                <div className='fixedBtn'>
                    <Button icon='angle up'
                            size='massive'
                            circular
                            floated={"right"}
                            as='a'
                            onClick={() => window.scroll(0, 0)}>
                    </Button>
                </div>
            </Container>
        </Segment>

    </Fragment>

);

export default Footer;
