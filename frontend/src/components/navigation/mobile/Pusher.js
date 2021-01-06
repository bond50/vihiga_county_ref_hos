import React from 'react';
import { Menu, Segment, } from "semantic-ui-react";
import MenuToggle from "./menuToggler";

const SideBarPusher = ({handleToggle}) => (
        <Segment inverted textAlign='center'
                 style={{minHeight: 0, padding: '0'}} vertical
        >
            <Menu inverted pointing secondary size='large'>
                <MenuToggle handleToggle={handleToggle}/>
            </Menu>
        </Segment>


    );

export default SideBarPusher;