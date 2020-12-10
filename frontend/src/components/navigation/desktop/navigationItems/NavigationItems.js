import React from 'react';
import {Container, Menu} from "semantic-ui-react";
import {connect} from "react-redux";
import DropDowns from "./links/DropDowns";
import {about, contact, covid, logo, media, services, tenders, training} from "./links/links";


function mapStateToProps(state) {
    return {
        fixed: state.fixed.fixed
    }
}


const NavigationItems = ({activeItem, handleItemClick, fixed}) => (

    <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
    >
        <Container>
            {logo()}
            <DropDowns text='ABOUT US'>
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
        </Container>
    </Menu>

);

export default connect(mapStateToProps)(NavigationItems);
