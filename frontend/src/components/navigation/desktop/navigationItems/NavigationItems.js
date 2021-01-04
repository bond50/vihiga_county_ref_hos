import React from 'react';
import {Container, Dropdown, Icon, Image, Menu} from "semantic-ui-react";
import {connect} from "react-redux";

import {about, covid, media, services,} from "./links/links";
import Logo from "./Logo/Logo";
import NavLink from "./links/Link";
import logo from '../../../../assets/logo/VCGlogo.png';
import './NavigationItems.css';


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
        size={!fixed ?'massive':'huge'}
        widths={9}
    >
        <Container>
            <Menu.Item>
               <img src={logo} alt='logo' />
            </Menu.Item>
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
