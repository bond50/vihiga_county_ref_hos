import React from "react";
import DesktopContainer from "../../containers/Desktop/DesktopContainer";
import MobileContainer from "../../containers/Mobile/MobileContainer";
import PropTypes from 'prop-types'
import {MediaContextProvider} from "../FresnelMedia/CreateMedia";


const ResponsiveContainer = ({children}) => (
    <MediaContextProvider>
        <DesktopContainer >
            {children}
        </DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}
export default ResponsiveContainer