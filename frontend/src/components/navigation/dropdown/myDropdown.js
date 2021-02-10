import React from 'react';
import {Container} from "semantic-ui-react";

const Dropdown = () => {
    return (
          <Dropdown item text="Dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item as="a" href="#root">
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="#root">
                    Another Action
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="#root">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Navbar header</Dropdown.Header>
                  <Dropdown.Item as="a" href="#root">
                    Separated link
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="#root">
                    One more separated link
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
    );
};

export default Dropdown;