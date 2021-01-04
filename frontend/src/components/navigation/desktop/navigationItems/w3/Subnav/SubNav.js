import React from 'react';
import myStyles from './Subnav.module.css';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SubNav = () => (
        <div className={myStyles.SubNav}>
            <button className={myStyles.SubNavBtn}>About{' '} <FontAwesomeIcon icon={faCaretDown} /></button>
            <div className={myStyles.SubNavContent}>
                <a href="#company">Company</a>
                <a href="#team">Team</a>
                <a href="#careers">Careers</a>
            </div>
        </div>
    );

export default SubNav;