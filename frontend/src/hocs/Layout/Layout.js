import React from "react";

import PropTypes from 'prop-types'
import DeskTopNav from "../../components/navigation/Navbar";
import Footer from "../../components/Footer/Footer";

const Layout = ({children}) => (
    <div>
        <DeskTopNav/>
        {children}
        <Footer/>
    </div>


)

Layout.propTypes = {
    children: PropTypes.node,
}
export default Layout