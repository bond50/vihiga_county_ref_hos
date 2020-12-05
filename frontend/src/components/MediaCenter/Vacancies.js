import React from 'react';
import {Header, Segment, Icon,} from "semantic-ui-react";


const Vacancies = () =>
    <Segment placeholder tertiary size='tiny' >
        <Header icon>
            <Icon name='pdf file outline'/>
            Sorry No Vacancies at the moment.Please check again later....
           <p> <em>We provide an equal opportunity for all</em></p>
            <p><a href='https://vihiga.go.ke/career.html'>Go to Vihiga County Website To check For Any</a> </p>
        </Header>
    </Segment>

export default Vacancies;