import React, {useState} from 'react';
import myStyles from './Navbar.module.css';
import SubNav from "./Subnav/SubNav";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
    state = {
        classes:[myStyles.Navbar]
    }

    addResponsiveClass() {


    }

    render() {


        return (
            <div className={this.state.classes.join(' ')}>
                <a href="#hdome">Home</a>
                <a href="#hdome">Home</a>
                <SubNav/>
                <a href="#contact">Contact</a>
                <a href="javascript:void(0);" className={myStyles.icon} onClick={this.addResponsiveClass}>
                    <FontAwesomeIcon icon={faBars}/>
                </a>
            </div>
        );
    }


}

export default Navbar;