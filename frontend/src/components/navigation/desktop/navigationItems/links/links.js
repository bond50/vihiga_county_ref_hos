import {Dropdown, Icon, Menu} from "semantic-ui-react";
import React from "react";
import {Link} from "react-router-dom";

export const logo = (clicked) => {
    return <Menu.Item
        as={Link} to='/'
        onClick={clicked}>
        <Icon name='home'/>
        home
    </Menu.Item>
}


export const training = (clicked) => (
    <Menu.Item name='training' as={Link} to='/training' onClick={clicked}/>
)


export const services = (clicked) => (
    <>
        <Dropdown.Item text='Directorates' as={Link} to='/services/departments/directorates' onClick={clicked} />
        <Dropdown.Item text='Pharmacy' as={Link} to='/services/departments/pharmacy' onClick={clicked}/>
        <Dropdown.Item text='Laboratory' as={Link} to='/services/departments/laboratory' onClick={clicked}/>
        <Dropdown.Item text='Radiology/Xray' as={Link} to='/services/departments/radiology' onClick={clicked}/>
        <Dropdown.Item text='Accident And Emergency' as={Link} to='/services/departments/ac' onClick={clicked}/>
        <Dropdown.Item text='ICU' as={Link} to='/services/departments/icu' onClick={clicked}/>
        <Dropdown.Item text='Ambulance' as={Link} to='/services/departments/ambulance' onClick={clicked}/>
        <Dropdown.Item text='Nursing Services' as={Link} to='/services/departments/nursing' onClick={clicked}/>
        <Dropdown.Item text='Health Records' as={Link} to='/services/departments/records' onClick={clicked}/>
    </>
)


export const about = (clicked) => (
    <>
        <Dropdown.Item text='Our Mission' as={Link} to='/about/mission' onClick={clicked}/>
        <Dropdown.Item text='Our Vision' as={Link} to='/about/vision' onClick={clicked}/>
        <Dropdown.Item text='Our Core Values' as={Link} to='/about/core-values' onClick={clicked}/>
        <Dropdown.Item text='Our Board Members' as={Link} to='/about/management/board' onClick={clicked}/>
        <Dropdown.Item text='Our Organogram' as={Link} to='/about/management/organogram' onClick={clicked}/>
        <Dropdown.Item text='Our Role' as={Link} to='/about/roles' onClick={clicked}/>
        <Dropdown.Item text='Our Plan' as={Link} to='/about/plan' onClick={clicked}/>
        <Dropdown.Item text='Our Health Goals' as={Link} to='/about/health-goals' onClick={clicked}/>
        <Dropdown.Item text='Our Neighboring Facilities' as={Link} to='/about/neighbor' onClick={clicked}/>
        <Dropdown.Item text='Our Projects' as={Link} to='/about/projects/project' onClick={clicked}/>
        <Dropdown.Item text='Our Partners' as={Link} to='/about/projects/partners' onClick={clicked}/>
    </>

)


export const media = (clicked) => (
    <>
        <Dropdown.Item text='Downloads' as={Link} to='/media-center/downloads' onClick={clicked}/>
        <Dropdown.Item text='Events' as={Link} to='/media-center/events' onClick={clicked}/>
        <Dropdown.Item text='Gallery' as={Link} to='/media-center/gallery' onClick={clicked}/>
        <Dropdown.Item text='Press' as={Link} to='/media-center/press' onClick={clicked}/>
        <Dropdown.Item text='Publications' as={Link} to='/media-center/publications' onClick={clicked}/>
        <Dropdown.Item text='Vacancies' as={Link} to='/media-center/vacancies' onClick={clicked}/>
    </>
)

export const tenders = (clicked) => (
    <Menu.Item name='Tenders' as={Link} to='/tenders' onClick={clicked}/>
)

export const contact = (clicked) => (
    <Menu.Item name='Contact' as={Link} to='/contact' onClick={clicked}/>
)

export const covid = (clicked) => (
    <>
        <Dropdown.Item text='FAqs' as={Link} to='/covid-19/covid' onClick={clicked}/>
        <Dropdown.Item text='Proper Hand Care' as={Link} to='/covid-19/hand' onClick={clicked}/>
        <Dropdown.Item text='How prepared is VCRH' as={Link} to='/covid-19/prep' onClick={clicked}/>

    </>
)
