import React from 'react';
import {Container, Dropdown, Menu} from "semantic-ui-react";
import {connect} from "react-redux";

import {about, covid, media, services,} from "./links/links";
import NavLink from "./links/Link";
import './NavigationItems.css';
// import Logo from "./Logo/Logo";



function mapStateToProps(state) {
    return {
        fixed: state.fixed.fixed
    }
}


const NavigationItems = ({activeItem, handleItemClick, fixed}) => (
    <Menu
        fixed={fixed ? 'top' : null}
        secondary={!fixed}
        pointing={!fixed}
        size='tiny'
        widths={9}
    >
        <Container>

               {/*<Logo />*/}

            <NavLink
                to='/'
                handleItemClick={handleItemClick}
                name='home'
                activeItem={activeItem === 'home'}>
                home
            </NavLink>
            <Dropdown
                item
                text='About'
                name='about'
                activeItem={activeItem === 'about'}
                onClick={handleItemClick}>
                <Dropdown.Menu>
                    {about()}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown
                item
                text='Services'
                name='services'
                activeItem={activeItem === 'services'}
                onClick={handleItemClick}>
                <Dropdown.Menu>
                    {services()}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown
                item
                text='Media'
                name='Media'
                activeItem={activeItem === 'media'}
                onClick={handleItemClick}>
                <Dropdown.Menu>
                    {media()}
                </Dropdown.Menu>
            </Dropdown>

            <NavLink
                to='/training'
                handleItemClick={handleItemClick}
                name='training'
                activeItem={activeItem === 'training'}>
                training
            </NavLink>

            <NavLink
                to='/tenders'
                handleItemClick={handleItemClick}
                name='tenders'
                activeItem={activeItem === 'tenders'}>
                tenders
            </NavLink>
            <NavLink
                to='/contact'
                handleItemClick={handleItemClick}
                name='contact'
                activeItem={activeItem === 'contact'}>
                contact us
            </NavLink>
            <Dropdown
                item
                text='Covid'
                name='covid'
                activeItem={activeItem === 'covid'}
                onClick={handleItemClick}>
                <Dropdown.Menu>
                    {covid()}
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Menu>

);

export default connect(mapStateToProps)(NavigationItems);
