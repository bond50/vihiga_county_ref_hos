import React from 'react';
import {Grid, Visibility} from 'semantic-ui-react';
import {connect} from 'react-redux'
import {removeFixedNav, setFixedNav} from "../../../store/actions/nav";
import {withRouter} from "react-router-dom";
import NavigationItems from "./navigationItems/NavigationItems";
import TopBar from "./navigationItems/Topbar/TopBar";
import classes from './styles.module.css'


const DeskTopNav = ({setFixedNav, removeFixedNav, handleItemClick, active}) => (
    <>
        <TopBar/>
        <Visibility
            once={false}
            onBottomPassed={() => (setFixedNav())}
            onBottomPassedReverse={() => (removeFixedNav())}
        >
            <Grid padded className={classes.segment}>
                <NavigationItems
                    handleItemClick={handleItemClick}
                    activeItem={active}/>
            </Grid>
        </Visibility>
    </>
);

export default connect(null, {setFixedNav, removeFixedNav})(withRouter(DeskTopNav));
