import React from 'react';
import './NavigationItems.css'
import {Container, DropdownItem, Header, Menu} from "semantic-ui-react";
import {connect} from "react-redux";
import DropdownItems from "./links/DropdownItems";

function mapStateToProps(state) {
    return {
        fixed: state.fixed.fixed
    }
}


const NavigationItems = ({handleToggleDropdownMenu, dropdownMenuStyle, fixed}) => (
    <Menu
        fixed={fixed ? 'top' : null}
        inverted={fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
    >


    </Menu>


)


export default connect(mapStateToProps)(NavigationItems);