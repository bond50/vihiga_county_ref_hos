import React from 'react';
import {Icon, Menu} from "semantic-ui-react";

const MenuToggle = ({handleToggle}) => (
    <Menu.Item onClick={handleToggle}>
        <Icon name='sidebar'/>
    </Menu.Item>
);

export default MenuToggle;