import React from 'react';
import {Sidebar, Menu,} from "semantic-ui-react";


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



            <MyAccordion handleSidebarHide={handleSidebarHide}/>


        </Sidebar>
    );
};

export default Pushable;