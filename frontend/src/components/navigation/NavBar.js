import React, {useState} from 'react';
import {Media} from "../../hocs/CreateMedia";
import DeskTopNav from "./desktop/DeskTopNav";
import {Sidebar} from "semantic-ui-react";
import MobileNav from "./mobile/MobileNav";


const NavBar = ({children}) => {
    const [active, setActive] = useState({active: 'home'});
    const handleItemClick = (e, {name}) => setActive({...active, active: name})
    const [state, setState] = useState({})
    const handleSidebarHide = () => setState({sidebarOpened: false})
    const handleToggle = () => setState({sidebarOpened: true})
    const {sidebarOpened} = state

    return (
        <>
            <Media greaterThan='mobile'>
                <DeskTopNav handleItemClick={handleItemClick} active={active.active}/>
                {children}
            </Media>
            <Media as={Sidebar.Pushable} at='mobile'>
                <MobileNav
                    sidebarOpened={sidebarOpened}
                    handleSidebarHide={handleSidebarHide}
                    handleToggle={handleToggle} children={children}/>
            </Media>
        </>
    );
};

export default NavBar;