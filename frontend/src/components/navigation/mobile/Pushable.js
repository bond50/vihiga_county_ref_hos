import React from 'react';
import {Sidebar, Menu, Container} from "semantic-ui-react";

import {contact, logo, media, tenders, training} from "../desktop/navigationItems/links/links";

import MyAccordion from "./Accordion/Accordion";

const Pushable = ({handleSidebarHide, sidebarOpened}) => {
    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={sidebarOpened}

            style={{backgroundColor: '#00302a'}}
        >
            <Menu inverted secondary>
                {logo()}
            </Menu>
            <MyAccordion/>

        </Sidebar>
    );
};

export default Pushable;