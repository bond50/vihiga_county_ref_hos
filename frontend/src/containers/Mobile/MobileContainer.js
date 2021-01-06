import React, {useState} from "react";
import PropTypes from 'prop-types'
import {Media} from "../../hocs/FresnelMedia/CreateMedia";
import {Sidebar} from "semantic-ui-react";
import MobileNav from "../../components/navigation/mobile/MobileNav";


function MobileContainer({children}) {
    const [state, setState] = useState({})
    const handleSidebarHide = () => setState({sidebarOpened: false})
    const handleToggle = () => setState({sidebarOpened: true})
    const {sidebarOpened} = state
    return (
        <Media as={Sidebar.Pushable} at='mobile'>
            <MobileNav
                sidebarOpened={sidebarOpened}
                handleSidebarHide={handleSidebarHide}
                handleToggle={handleToggle}
                children={children}/>
        </Media>
    )
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

export default MobileContainer;