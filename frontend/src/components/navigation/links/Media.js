import React, {Fragment} from 'react';
import Link from "./link/Link";

const Media = ({clicked}) => {
    const list = [
        {text :'Downloads', to: '/media-center/downloads' },
        {text :'Events', to: '/media-center/events' },
        {text :'Gallery', to: '/media-center/gallery' },
        {text :'Press', to: '/media-center/press' },
        {text :'Publications', to: '/media-center/publications' },
        {text :'Vacancies', to: '/media-center/vacancies' },
    ]

    return (
        <Fragment>
            {list.map(({text, to}, index) => {
                return <Link key={index} text={text} to={to} clicked={clicked}/>
            })}
        </Fragment>
    );
};

export default Media;



