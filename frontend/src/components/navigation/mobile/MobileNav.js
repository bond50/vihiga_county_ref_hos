import React from "react";
import {Segment, Sidebar} from "semantic-ui-react";
import Pushable from "./Pushable";
import SideBarPusher from "./Pusher";

const MobileNav = ({handleSidebarHide, sidebarOpened, handleToggle,children}) => {
    return (
        <>
            <Sidebar.Pushable as={Segment} >
                <Pushable handleSidebarHide={handleSidebarHide} sidebarOpened={sidebarOpened}/>
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <SideBarPusher sidebarOpened={sidebarOpened} handleToggle={handleToggle}/>
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </>
    );
};

export default MobileNav;

