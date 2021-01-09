import React from "react";
import {Media} from "../../hocs/FresnelMedia/CreateMedia";
import DeskTopNav from "../../components/navigation/desktop/DeskTopNav";
import Footer from "../../components/Footer/Footer";
import {Container} from "semantic-ui-react";
import classes from './DesktopContainer.module.css'


function DesktopContainer({children}) {
    return (
        <Media greaterThan='mobile'>
            <DeskTopNav/>
            <Container className={classes.content}>
                {children}
            </Container>
            <Footer/>
        </Media>
    )
}

export default DesktopContainer;