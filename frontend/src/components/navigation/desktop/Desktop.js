import React from 'react';
import {Container, Dropdown, Grid, Menu} from "semantic-ui-react";


const Desktop = () => {
    return (
         <Grid padded className="tablet computer only">
          <Menu borderless fluid fixed="top" size="huge">
            <Container>
              <Menu.Item header as="a">
                Project Name
              </Menu.Item>
              <Menu.Item active as="a">
                Home
              </Menu.Item>
              <Menu.Item as="a">About</Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
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
              <Menu.Menu position="right">
                <Menu.Item as="a">Default</Menu.Item>
                <Menu.Item as="a">Static top</Menu.Item>
                <Menu.Item active as="a">
                  Fixed top
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Grid>
    );
};

export default Desktop;