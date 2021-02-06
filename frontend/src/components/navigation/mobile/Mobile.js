import React from 'react';
import {Button, Dropdown, Grid, Icon, Menu} from "semantic-ui-react";
import './Mobile.css'

const Mobile = ({handleDropToggleDropdownMenu, dropMenuStyle}) => {
    return (
         <Grid padded className="mobile only">
          <Menu borderless fluid fixed="top" size="huge">
            <Menu.Item header as="a">
              Project Nam
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  basic
                  toggle
                  onClick={handleDropToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              vertical
              borderless
              fluid
              style={dropMenuStyle}
            >
              <Menu.Item active as="a">
                Home
              </Menu.Item>
              <Menu.Item as="a">About</Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
              <Dropdown text="Dropdown" className="item">
                <Dropdown.Menu>
                  <Dropdown.Item as="a">Action</Dropdown.Item>
                  <Dropdown.Item as="a">Another action</Dropdown.Item>
                  <Dropdown.Item as="a">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Navbar header</Dropdown.Header>
                  <Dropdown.Item as="a">Seperated link</Dropdown.Item>
                  <Dropdown.Item as="a">One more seperated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item as="a">Default</Menu.Item>
              <Menu.Item as="a">Static top</Menu.Item>
              <Menu.Item active as="a">
                Fixed top
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
    );
};

export default Mobile;