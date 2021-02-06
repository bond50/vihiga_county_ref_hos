import React from 'react';
import {Container, DropdownItem,} from "semantic-ui-react";
import './DropDownItems.css'

const DropdownItems = ({handleToggleDropdownMenu,dropdownMenuStyle,children,name}) => {
    return (
         <div className="dropdown" onClick={handleToggleDropdownMenu}>
            <a className="item">{name}<i className="dropdown icon"/></a>
            <div style={dropdownMenuStyle} className='megamenu'>
                <Container>
                    {children}
                </Container>
            </div>
        </div>
    );
};

export default DropdownItems;