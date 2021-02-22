import React, {Fragment} from 'react';
import Link from "./link/Link";

const About = ({clicked}) => {
        const list = [
            {text: 'FAqs', to: '/covid-19/covid'},
            {text: 'Proper Hand Care', to: '/covid-19/hand'},
            {text: 'How prepared is VCRH', to: '/covid-19/prep'},
        ]

        return (
            <Fragment>
                {list.map(({text, to}, index) => {
                    return <Link key={index} text={text} to={to} clicked={clicked}/>
                })}
            </Fragment>
        );
    }
;

export default About;



