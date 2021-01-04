import React from "react";
import {Media} from "../../hocs/FresnelMedia/CreateMedia";
import DeskTopNav from "../../components/navigation/desktop/DeskTopNav";
import Footer from "../../components/Footer/Footer";


function DesktopContainer({children}) {
    return (
        <Media greaterThan='mobile'>
            <DeskTopNav />
            {children}
            <Footer/>
        </Media>
    )
}

export default DesktopContainer;