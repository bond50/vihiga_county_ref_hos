import React from "react";

import PropTypes from 'prop-types'
import DeskTopNav from "../../components/navigation/desktop/Navbar";

const Layout = ({children}) => (
    <div>
        <DeskTopNav/>
        {children}
    </div>


)

Layout.propTypes = {
    children: PropTypes.node,
}
export default Layout