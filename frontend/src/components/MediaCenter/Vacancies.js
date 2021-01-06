import React from 'react';
import {Header, Segment, Icon,} from "semantic-ui-react";
import AboutContainer from '../About/AboutContainer'


const Vacancies = () =>

    <AboutContainer>
        <Header as='h3'>
            Sorry No Vacancies at the moment.Please check again later....
        </Header>
        <div style={{fontSize: '1.2em'}}><em>We provide an equal opportunity for all</em></div>
        <div style={{fontSize: '1.2em'}}><a href='https://vihiga.go.ke/career.html'>Go to Vihiga County Website To check
            For Any</a>
        </div>
    </AboutContainer>

export default Vacancies;