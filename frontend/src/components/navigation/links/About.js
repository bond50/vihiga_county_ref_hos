import React, {Fragment} from 'react';
import Link from "./link/Link";

const About = ({clicked}) => {
    const list = [
        {text: 'Mission,Vision and core values', to: '/about/vision'},
        {text: 'Our Board Members', to: '/about/management/board'},
        {text: 'Our Organogram', to: '/about/management/organogram'},
        {text: 'Our Role', to: '/about/roles'},
        {text: 'Our Plan', to: '/about/plan'},
        {text: 'Our Health Goals', to: '/about/health-goals'},
        {text: 'Our Neighboring Facilities', to: '/about/neighbor'},
        {text: 'Our Projects', to: '/about/projects/project'},
        {text: 'Our Partners', to: '/about/projects/partners'},

    ]

    return (
        <Fragment>
            {list.map(({text, to}, index) => {
                return <Link key={index} text={text} to={to} clicked={clicked}/>
            })}
        </Fragment>
    );
};

export default About;