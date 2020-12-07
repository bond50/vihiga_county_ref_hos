import React from 'react';
import {Header, List} from 'semantic-ui-react'
import AboutContainer from "../AboutContainer";

const Organogram = () => (
    <AboutContainer title='THE ORGANIZATIONAL STRUCTURE '>
        Vihiga County Referral Hospital is the main hospital within Vihiga County serving as a referral facility for Sub
        County and Health centers within the County.
        It attained its level five status in August 2017.
        The hospital has an integrated organizational structure with various departments and committees working to
        ensure good leadership and governance at the facility.

        <Header as='h3'>HOSPITAL MANAGEMENT STRUCTURE </Header>
        <List>
            <List.Item as='li'>
                <List.Header as='h4'> Medical Superintendent</List.Header>
                <p> Medical Superintendent is the head of the institution. His responsibilities
                    include:-</p>
                <List.Item as='ol'>
                    <List.Item as='li' value='-'>
                        Supervision of clinical and administrative functions at the facility.
                    </List.Item>
                    <List.Item as='li' value='-'>
                        He is the secretary to the hospital board and the chair of the hospital management team and the
                        Executive expenditure committee.
                    </List.Item>
                    <List.Item as='li' value='-'>
                        Serves as the hospital spokesman.
                    </List.Item>
                </List.Item>
            </List.Item>
            <List.Item>
                <List.Header as='h4'> Deputy Medical Superintendent</List.Header>
                <List.Item as='ol'>
                    <List.Item as='li' value='-'>
                        Acts as the principal assistant to the Medical Superintendent performing duties in his absence
                        or under delegation of the Medical Superintendent.
                    </List.Item>
                </List.Item>
            </List.Item>

            <List.Item>
                <List.Header as='h4'> Nursing officer in charge</List.Header>
                <List.Item as='ol'>
                    <List.Item as='li' value='-'>
                        Is in charge of all the nurses at the facility and serves as the custodian of nursing care
                        within the institution.
                    </List.Item>
                    <List.Item as='li' value='-'>
                        He also supervises auxiliary services including nutrition, comprehensive care clinic, Laundry
                        and Social work.
                    </List.Item>

                </List.Item>
            </List.Item>

            <List.Item>
                <List.Header as='h4'> Hospital Administrator </List.Header>
                <List.Item as='ol'>
                    <List.Item as='li' value='-'>
                        She serves as the immediate supervisor of administrative functions at the facility.
                        This includes Human Resource, Supply Chain Management, Finance, Transport, Security, Housing,
                        Maintenance and Biomedical engineering.
                    </List.Item>
                    <List.Item as='li' value='-'>
                        He is the secretary to the EEC and the HMT.
                    </List.Item>

                </List.Item>


            </List.Item>
            <List.Item>
                <List.Header as='h4'> Head of clinical services</List.Header>
                <List.Item as='ol'>
                    <List.Item as='li' value='-'>
                        Acts as the immediate supervisor for all clinical services at the facility.
                    </List.Item>
                    <List.Item as='li' value='-'>
                        He supervises Consultants, Specialists, Medical Officers, and Clinical Officers, interns and
                        students on clinical attachment.
                    </List.Item>
                    <List.Item as='li' value='-'>
                        He also supervises Pharmacy and Diagnostics at the facility.
                    </List.Item>

                </List.Item>


            </List.Item>

        </List>

        <Header as='h3'>
            Hospital board and committees
        </Header>
        <Header as='h5'>Hospital management board-</Header>
        <p> It’s the lead administrative and management organ at the facility. It’s composed of eight
            substantive members
            with four other co-opted members including the County Director of Health, County Health
            Administrative Officer,
            Nursing Officer in charge and the Hospital Administrator.</p>

        <p> It’s tasked with offering oversight on hospital functions and ratifying the decisions made by the EEC and
            the
            hospital management team.</p>
        <p>It also acts as the linkage between the hospital and the community.</p>
        <p> The hospital board has <b>2 Sub committees</b></p>
        <List as='ul'>
            <List.Item as='li'>Quality of care subcommittee</List.Item>
            <List.Item as='li'>Finance and general purpose subcommittee.</List.Item>
        </List>

        <Header as='h4'>Hospital Executive Committee is composed of:-</Header>
        <List as='ol'>
            <List.Item as='li'>The Medical Superintendent</List.Item>
            <List.Item as='li'>Deputy Medical Superintendent</List.Item>
            <List.Item as='li'>Hospital administrator</List.Item>
            <List.Item as='li'>Nursing officer in charge</List.Item>
            <List.Item as='li'>Head of Laboratory</List.Item>
        </List>
        <p>It’s tasked with – making the day to management decisions at the hospital.</p>
        <Header as='h4'>Hospital Management Team- is composed of the heads of departments.</Header>
        <p> It’s tasked with the making management decisions and ratifying the EEC decisions
            The no. is organized in various committees.</p>
        <Header as='h4'>
            Hospital committees
        </Header>
        <p> The hospital several committees that are tasked with supervising various functions at the hospital.</p>

        <List as='ul'>
            <List.Item as='li'>Transfusion committee – involved with ensuring safe – blood transfusion practicesat the
                hospital.</List.Item>
            <List.Item as='li'> Training and research committee- Supervise training function including attachment and
                internship.
                Also
                approves researches at the facility.</List.Item>
            <List.Item as='li'> Feeding committee –tasked with nutritional functions at the facility.</List.Item>
            <List.Item as='li'>Drugs and therapeutics committee- Has a lead role in the usage of drugs and
                treatment</List.Item>
            <List.Item as='li'> Infection prevention committee- Tasked with issues of cleanliness and infection
                control.</List.Item>
            <List.Item as='li'>Quality improvement team-it is tasked with championing of provision of quality services
                at the
                facility</List.Item>
        </List>
        <p> These committees have a delegated function from the HMT.</p>
        <Header as='h4'>
            Departmental committees
        </Header>
        <p>All the departments have committees that involve all staffs in the departments
            and
            are tasked with generating departmental needs, mortality audits,protocols and offer feed back to the
            management.</p>
        <Header as='h4'>
            Conclusion
        </Header>
        <p>
            In August 2016, the facility streamlined its organizational structure to create terms of reference for
            all
            its
            Heads of departments and sectional incharges. It also created clear reporting lines for various offices
            and
            departments. The facility organizational structure is in line with the National leadership and
            governance
            protocols and the principle of lean health.
            The facility will continue putting in place leadership and governance structures to ensure stewardship
            of
            all
            aspects of the hospital and ultimately improve the services.
        </p>


    </AboutContainer>
);

export default Organogram;