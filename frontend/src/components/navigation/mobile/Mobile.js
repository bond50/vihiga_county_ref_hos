import React from 'react';
import {Button, Grid, Icon, Menu} from "semantic-ui-react";
import './Mobile.css';
import MyDropdown from "../dropdown/myDropdown";
import About from '../links/About';
import Services from '../links/Services'
import Covid from '../links/Covid';
import Media from '../links/Media';
import Contact from '../links/Contact';
import Home from '../links/Home';
import Tenders from '../links/Tenders';
import Training from '../links/Training';
import {connect} from "react-redux";
import {Link} from "react-router-dom";


function mapStateToProps(state) {
    return {
        fixed: state.fixed.fixed
    }
}


const Mobile = ({handleDropToggleDropdownMenu, dropMenuStyle, fixed}) => {
    return (
        <Grid padded className="mobile only">
            <Menu
                borderless
                fluid
                fixed={fixed ? 'top' : null}
                size="huge">
                <Menu.Item header as={Link}  to='/'>
                    Logo
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button
                            icon
                            primary
                            toggle
                            onClick={handleDropToggleDropdownMenu}
                        >
                            <Icon name="content"/>
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
                <Menu
                    vertical
                    borderless
                    fluid
                    style={dropMenuStyle}
                >
                    <Home clicked={handleDropToggleDropdownMenu}/>
                    <MyDropdown title='About'>
                        <About clicked={handleDropToggleDropdownMenu}/>
                    </MyDropdown>
                    <MyDropdown title='Services'>
                        <Services clicked={handleDropToggleDropdownMenu}/>
                    </MyDropdown>
                    <MyDropdown title='Media Center'>
                        <Media clicked={handleDropToggleDropdownMenu}/>
                    </MyDropdown>
                    <Tenders clicked={handleDropToggleDropdownMenu}/>
                    <Training clicked={handleDropToggleDropdownMenu}/>
                    <Contact clicked={handleDropToggleDropdownMenu}/>
                    <MyDropdown title='Covid'>
                        <Covid clicked={handleDropToggleDropdownMenu}/>
                    </MyDropdown>
                </Menu>
            </Menu>
        </Grid>
    );
};

export default connect(mapStateToProps)(Mobile);