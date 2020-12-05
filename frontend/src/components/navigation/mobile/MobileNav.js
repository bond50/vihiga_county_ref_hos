import React from "react";
import {Sidebar} from "semantic-ui-react";
import Pushable from "./Pushable";
import SideBarPusher from "./Pusher";

const MobileNav = ({handleSidebarHide, sidebarOpened, handleToggle,children}) => {
    return (
        <>
            <Sidebar.Pushable>
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

