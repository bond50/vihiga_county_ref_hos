import React, {Fragment} from 'react';
import Link from "./link/Link";


const Services = ({clicked}) => {
    const list = [
        {text: 'Special Clinics', to: '/services/departments/clinics'},
        {text: 'Directorates', to: '/services/departments/directorates'},
        {text: 'Pharmacy', to: '/services/departments/pharmacy'},
        {text: 'Laboratory', to: '/services/departments/laboratory'},
        {text: 'Radiology/Xray', to: '/services/departments/radiology'},
        {text: 'Accident And Emergency', to: '/services/departments/ac'},
        {text: 'ICU', to: '/services/departments/icu'},
        {text: 'Ambulance', to: '/services/departments/ambulance'},
        {text: 'Nursing Services', to: '/services/departments/nursing'},
        {text: 'Health Records', to: '/services/departments/records'},

    ]

    return (
        <Fragment>
            {list.map(({text, to}, index) => {
                return <Link key={index} text={text} to={to} clicked={clicked}/>
            })}
        </Fragment>
    );
};

export default Services;