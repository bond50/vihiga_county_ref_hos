import React from 'react';
import {MediaContextProvider} from "./CreateMedia";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/navigation/NavBar";
import './Content.css'


const Layout = ({children}) => {
    return (
        <MediaContextProvider>
            <NavBar>
                   {children}

                 <Footer/>
            </NavBar>
        </MediaContextProvider>
    );
};

export default Layout;