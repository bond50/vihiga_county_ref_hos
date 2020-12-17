import React from 'react';
import {Segment, Visibility,  Grid,  Icon} from 'semantic-ui-react';
import {connect} from 'react-redux'
import {removeFixedNav, setFixedNav} from "../../../store/actions/nav";
import { withRouter} from "react-router-dom";
import NavigationItems from "./navigationItems/NavigationItems";
import './styles.css'


const DeskTopNav = ({setFixedNav, removeFixedNav, handleItemClick, active}) => (
    <>
        <Visibility
            once={false}
            onBottomPassed={() => (setFixedNav())}
            onBottomPassedReverse={() => (removeFixedNav())}
        >
            <Segment vertical style={{background: "#2CC73E"}} inverted>
                <Grid container>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            VIHIGA COUNTY REFERRAL HOSPITAL
                        </Grid.Column>
                        <Grid.Column floated='right' width={2}>
                            <a href='https://www.facebook.com/groups/215961735537277/'>
                                <Icon name='facebook' inverted/>
                            </a>
                            <a href='https://www.twitter.com/'>
                                <Icon name='twitter' inverted/>
                            </a>
                            <a href='https://www.youtube.com/'>
                                <Icon name='youtube' inverted/>
                            </a>
                            <a href='https://www.instagram.com/'>
                                <Icon name='instagram' inverted/>
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical style={{padding: "1em 0em"}}>
                <NavigationItems
                    handleItemClick={handleItemClick}
                    activeItem={active}/>
            </Segment>

        </Visibility>
    </>
);

export default connect(null, {setFixedNav, removeFixedNav})(withRouter(DeskTopNav));
