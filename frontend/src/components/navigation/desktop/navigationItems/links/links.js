import {Dropdown, Icon, Menu} from "semantic-ui-react";
import React from "react";
import {Link} from "react-router-dom";

export const logo = () => {
    return <Menu.Item header as={Link} to='/'>
        <Icon name='home' />
        home
    </Menu.Item>
}


export const training = () => (
    <Menu.Item name='training' as={Link} to='/training'/>
)


export const services = () => (
    <>
        <Dropdown.Item text='Directorates' as={Link} to='/services/departments/directorates'/>
        <Dropdown.Item text='Pharmacy' as={Link} to='/services/departments/pharmacy'/>
        <Dropdown.Item text='Laboratory' as={Link} to='/services/departments/laboratory'/>
        <Dropdown.Item text='Radiology/Xray' as={Link} to='/services/departments/radiology'/>
        <Dropdown.Item text='Accident And Emergency' as={Link} to='/services/departments/ac'/>
        <Dropdown.Item text='ICU' as={Link} to='/services/departments/icu'/>
        <Dropdown.Item text='Ambulance' as={Link} to='/services/departments/ambulance'/>
        <Dropdown.Item text='Nursing Services' as={Link} to='/services/departments/nursing'/>
    </>
)


export const about = () => (
    <>
        <Dropdown.Item text='Our Mission' as={Link} to='/about/mission'/>
        <Dropdown.Item text='Our Vision' as={Link} to='/about/vision'/>
        <Dropdown.Item text='Our Core Values' as={Link} to='/about/core-values'/>
        <Dropdown.Item>
            <Dropdown floating text='Management'  pointing='left' fluid>
                <Dropdown.Menu>
                    <Dropdown.Item text='Board' as={Link} to='/about/management/board'/>
                    <Dropdown.Item text='Organogram' as={Link} to='/about/management/organogram'/>
                </Dropdown.Menu>
            </Dropdown>
        </Dropdown.Item>

        <Dropdown.Item text='Our Role' as={Link} to='/about/roles'/>
        <Dropdown.Item text='Our Plan' as={Link} to='/about/plan'/>
        <Dropdown.Item text='Our Health Goals' as={Link} to='/about/health-goals'/>
        <Dropdown.Item text='Neighboring Facilities' as={Link} to='/about/neighbor'/>
        <Dropdown.Item>
            <Dropdown  text='Projects' fluid pointing='left'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Projects' as={Link} to='/about/projects/project'/>
                    <Dropdown.Item text='Partners' as={Link} to='/about/projects/partners'/>
                </Dropdown.Menu>
            </Dropdown>
        </Dropdown.Item>


    </>

)


export const media = () => (
    <>
        <Dropdown.Item text='Downloads' as={Link} to='/media-center/downloads'/>
        <Dropdown.Item text='Events' as={Link} to='/media-center/events'/>
        <Dropdown.Item text='Gallery' as={Link} to='/media-center/gallery'/>
        <Dropdown.Item text='Press' as={Link} to='/media-center/press'/>
        <Dropdown.Item text='Publications' as={Link} to='/media-center/publications'/>
        <Dropdown.Item text='Vacancies' as={Link} to='/media-center/vacancies'/>
    </>
)

export const tenders = () => (
    <Menu.Item name='Tenders' as={Link} to='/tenders'/>
)

export const contact = () => (
    <Menu.Item name='Contact' as={Link} to='/contact'/>
)

export const covid = () => (
    <>
        <Dropdown.Item text='FAqs' as={Link} to='/covid-19/covid'/>
        <Dropdown.Item text='Proper Hand Care' as={Link} to='/covid-19/hand'/>
        <Dropdown.Item text='How prepared is VCRH' as={Link} to='/covid-19/prep'/>

    </>
)
