import React from 'react';
import {Sidebar, Menu,} from "semantic-ui-react";


import MyAccordion from "./Accordion/Accordion";

const Pushable = ({handleSidebarHide, sidebarOpened}) => {
    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            onHide={handleSidebarHide}
            vertical
            visible={sidebarOpened}
            style={{backgroundColor: 'white'}}
        >
            <MyAccordion handleSidebarHide={handleSidebarHide}/>
        </Sidebar>
    );
};

export default Pushable;