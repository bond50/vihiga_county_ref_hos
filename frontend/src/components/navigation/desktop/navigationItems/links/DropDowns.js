import React from 'react';
import {Dropdown} from "semantic-ui-react";

const DropDowns = (props) => {
    return (
        <Dropdown item pointing className='link item' text={props.text} {...props} >
            <Dropdown.Menu>
                {props.children}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropDowns;