import React from 'react';
import {Menu} from "semantic-ui-react";
import {connect} from "react-redux";
import DropDowns from "./links/DropDowns";
import {about, contact, covid, logo, media, services, tenders, training} from "./links/links";
import {fixedMenuStyle, menuStyle} from "../styles";


function mapStateToProps(state) {
    return {
        fixed: state.fixed.fixed
    }
}


const NavigationItems = ({activeItem, handleItemClick, fixed}) => (
    <Menu
        fixed={fixed ? 'top' : null}
        borderless={!fixed}
        pointing
        secondary
        stackable
        widths={8}
        inverted
        style={fixed ? fixedMenuStyle : menuStyle}
    >
        {logo()}
        <DropDowns text='ABOUT US'  >
            {about()}
        </DropDowns>
        <DropDowns text='SERVICES'>
            {services()}
        </DropDowns>
        <DropDowns text='media CENTER'>
            {media()}
        </DropDowns>
        {tenders()}
        {contact()}
        {training()}
        <DropDowns text='COvID19'>
            {covid()}
        </DropDowns>
    </Menu>
);

export default connect(mapStateToProps)(NavigationItems);
