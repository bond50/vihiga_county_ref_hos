import React from "react";
import {Container, Segment, Sidebar} from "semantic-ui-react";
import Pushable from "./Pushable";
import SideBarPusher from "./Pusher";
import Footer from '../../Footer/Footer'

const MobileNav = ({handleSidebarHide, sidebarOpened, handleToggle, children}) => {
    return (
        <>
            <Sidebar.Pushable as={Segment}>
                <Pushable handleSidebarHide={handleSidebarHide} sidebarOpened={sidebarOpened}/>
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <SideBarPusher sidebarOpened={sidebarOpened} handleToggle={handleToggle}/>
                    <Container style={{backgroundColor: '#ffffff', overflow: 'auto'}}>
                        {children}
                    </Container>
                    <Footer/>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </>
    );
};

export default MobileNav;

