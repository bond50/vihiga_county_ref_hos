import React from 'react';
import {NavLink} from "react-router-dom";

const myLink = ({to, text, active, clicked}) => {
    return (
        <NavLink
            to={to}
            className='item link'
            active={active}
            onClick={clicked}>
            {text}
        </NavLink>
    );
}

export default myLink;