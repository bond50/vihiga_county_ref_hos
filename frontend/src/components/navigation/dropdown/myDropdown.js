import React from 'react';
import {Dropdown} from "semantic-ui-react";

const MyDropdown = ({children,title}) => {
    return (
          <Dropdown item text={title}>
                <Dropdown.Menu>
                    {children}
                </Dropdown.Menu>
              </Dropdown>
    );
};

export default MyDropdown;