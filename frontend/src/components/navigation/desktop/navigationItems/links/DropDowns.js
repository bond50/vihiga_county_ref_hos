import React from 'react';
import {Dropdown} from "semantic-ui-react";

const DropDowns = ({name,activeItem,handleItemClick,children}) => {
    return (
        <Dropdown item  name={name} activeItem={activeItem}
                  onClick={handleItemClick}>
            <Dropdown.Menu>
                {children}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropDowns;