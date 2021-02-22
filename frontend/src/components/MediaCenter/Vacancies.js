import React from 'react';
import {Header} from "semantic-ui-react";
import AboutContainer from '../About/AboutContainer'


const Vacancies = () =>

    <AboutContainer>
        <Header as='h3'>
            Sorry No Vacancies at the moment.Please check again later....
        </Header>
        <p ><em>We provide an equal opportunity for all</em></p>
        <p><a href='https://vihiga.go.ke/career.html'>Go to Vihiga County Website To check
            For Any</a>
        </p>
    </AboutContainer>

export default Vacancies;