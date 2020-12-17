import React from 'react';
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

const NavLink = ({name,activeItem,handleItemClick,children,to,icon}) => {
    return (
        <Menu.Item
            as={Link}
            to={to}
            icon={icon}
            name={name}
            active={activeItem}
            onClick={handleItemClick}>
            {children}
        </Menu.Item>
    );
};

export default NavLink;
