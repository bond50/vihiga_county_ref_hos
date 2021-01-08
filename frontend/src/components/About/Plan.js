import React from 'react';
import {Button, List} from "semantic-ui-react";
import AboutContainer from "./AboutContainer";


const Plan = () => <AboutContainer title='VCRH Strategic Plan'>
    <p>VCRH undertook the process to develop a strategic plan for the years 2018 – 2022. The entire hospital staff
        participated in carrying out of a situational analysis that set up the basis for the development of this
        strategic plan.
    </p>
    <p>The VCRH 2018-2022 strategic plan entails objectives to improve service delivery to a status commensurate
        with a level 5 referral hospital. They are drawn from the WHO pillars of strengthening health systems.
    </p>
    <h3>The strategic objectives of the strategic plan are:</h3>
    <List as='ol' >
        <List.Item as='li'>To have an effective and efficient hospital management, leadership and governance
            system.</List.Item>
        <List.Item as='li'>To broaden the scope and enhance the quality of clinical services</List.Item>
        <List.Item as='li'>To optimize health workforce size, skills, motivation and distribution</List.Item>
        <List.Item as='li'>To have an efficient health management and information system</List.Item>
        <List.Item as='li'>To modernize and revolutionize health infrastructure</List.Item>
        <List.Item as='li'>To increase resource mobilization, streamline budgeting and expenditure processes and
            strengthen
            accountability systems
        </List.Item>
        <List.Item as='li'> ensure availability and rational use of effective, safe and affordable health products
            and
            technologies
        </List.Item>

    </List>
    <p>The implementation arrangements will be as per Kenya Essential Package for Health (KEPH) for a level5
        facility. The coordination framework, management structure, monitoring and evaluation system and information
        flow is outlined.Resource requirements to implement this plan are enormous and great effort is to be put
        into mobilization, management and sustainability.</p>

    <p>The hospital intends to achieve the established objectives through set strategies and activities spelt out
        under each objective. The facility intends that the strategic plan will guide investments in health by the
        Vihiga County and facilitate engagement with stakeholders and partners to support various activities and
        priorities. The plan will be referred to during the formulation of annual work plans as a framework for
        growth of the institution.
    </p>
    <p>The strategic plan is inclusive of a monitoring and evaluation process that will review the implementation of
        the established goals at its different phases. Implementation of the strategic plan will require financial
        investment of 2.2 billion Kenya shillings.</p>

    <Button basic>
        Download Full Strategic Plan
    </Button>
</AboutContainer>


export default Plan;