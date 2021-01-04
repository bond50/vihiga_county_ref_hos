import React from 'react';
import {Segment, Visibility, Grid, Icon, Container, Breadcrumb, Header, Menu} from 'semantic-ui-react';
import {connect} from 'react-redux'
import {removeFixedNav, setFixedNav} from "../../../store/actions/nav";
import {withRouter} from "react-router-dom";
import NavigationItems from "./navigationItems/NavigationItems";
import './styles.css'
import TopBar from "./navigationItems/Topbar/TopBar";
import Logo from "./navigationItems/Logo/Logo";


const DeskTopNav = ({setFixedNav, removeFixedNav, handleItemClick, active}) => (
    <>
        <TopBar/>
        <Visibility
            once={false}
            onBottomPassed={() => (setFixedNav())}
            onBottomPassedReverse={() => (removeFixedNav())}
        >
            <Segment
                textAlign='center'
                style={{padding: '0'}}
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
