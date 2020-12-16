import React from 'react';
import {Segment, Visibility, Header, Grid} from 'semantic-ui-react';
import {connect} from 'react-redux'
import {removeFixedNav, setFixedNav} from "../../../store/actions/nav";
import {withRouter} from "react-router-dom";
import './styles.css'


import NavigationItems from "./navigationItems/NavigationItems";
import Logo from "./navigationItems/logo";
import './styles.css'



const DeskTopNav = ({setFixedNav, removeFixedNav, handleItemClick, active}) => (
    <>
        <Segment attached>
            <Grid stackable container>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column width={3}>
                        <Logo/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Header style={{
                            color: '#df7a1f',
                            fontSize: '2.9em',
                            fontWeight: '900'
                            , textShadow: '1px 1px #15b000'
                        }}>
                            Vihiga County Referral Hospital
                        </Header>
                        <div style={{fontSize: '1.44em'}}>
                            We take care of your precious health
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Visibility
            once={false}
            onBottomPassed={() => (setFixedNav())}
            onBottomPassedReverse={() => (removeFixedNav())}
        >
            <Segment
                inverted
                style={{padding: '0', background: 'rgb(44, 199,46)'}}
                vertical
            >
                <NavigationItems
                    handleItemClick={handleItemClick}
                    activeItem={active}/>
            </Segment>

        </Visibility>
    </>
);

export default connect(null, {setFixedNav, removeFixedNav})(withRouter(DeskTopNav));
