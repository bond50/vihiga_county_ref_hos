import React from 'react';
import {Menu,Sidebar} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Pushable = ({handleSidebarHide,sidebarOpened}) => {
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
            <Menu.Item as={Link} to='/' active>
                Home
            </Menu.Item>
            <Menu.Item as={Link} to='/'>Work</Menu.Item>
            <Menu.Item as={Link} to='/'>Company</Menu.Item>
            <Menu.Item as={Link} to='/'>Careers</Menu.Item>
            <Menu.Item as={Link} to='/'>Log in</Menu.Item>
            <Menu.Item as={Link} to='/'>Sign Up</Menu.Item>
        </Sidebar>
    );
};

export default Pushable;