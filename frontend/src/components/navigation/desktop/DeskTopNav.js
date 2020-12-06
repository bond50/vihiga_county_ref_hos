import React from 'react';
import {Segment, Visibility, Header, Container, Grid} from 'semantic-ui-react';
import {connect} from 'react-redux'
import {removeFixedNav, setFixedNav} from "../../../store/actions/nav";
import {withRouter} from "react-router-dom";


import NavigationItems from "./navigationItems/NavigationItems";
import Logo from "./navigationItems/logo";


const DeskTopNav = ({setFixedNav, removeFixedNav, handleItemClick, active,}) => (
    <>
        <Container>
            <Grid stackable>
                <Grid.Row style={{marginTop: "0.2em"}}>
                    <Grid.Column width={3} className='responsive'>
                        <Logo/>
                    </Grid.Column>
                    <Grid.Column width={13} style={{marginTop: "0.2em"}}>
                        <Header as='h1' style={{color: '#df7a1f', fontSize: '2.8em'}}  >
                            Vihiga County Referral Hospital
                            <Header.Subheader style={{fontSize:'0.6em',color:'#002d30'}}>
                                 We Take Care Of Your Precious Health
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        <Visibility
            once={false}
            onBottomPassed={() => (setFixedNav())}
            onBottomPassedReverse={() => (removeFixedNav())}
        >
            <Segment inverted style={{padding: '0em'}}
                     vertical>
                <NavigationItems handleItemClick={handleItemClick} activeItem={active}/>
            </Segment>
        </Visibility>

    </>
);

export default connect(null, {setFixedNav, removeFixedNav})(withRouter(DeskTopNav));
