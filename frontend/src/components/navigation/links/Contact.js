import React from 'react';
import MyLink from "./link/Link";

const Contact = ({clicked}) => (
    <MyLink to='/contact' text='Contact Us' clicked={clicked}/>
)

export default Contact;
