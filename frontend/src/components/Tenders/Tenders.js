import React from 'react';

import {Icon, Header, Segment, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import AboutContainer from "../About/AboutContainer";


const Tenders = () => <>
    <AboutContainer>
        <Segment placeholder style={{border:'none'}}>
            <Header icon>
                <Icon name='search'/>
                We don't have any tender available now....
            </Header>
            <Segment.Inline>
                <Button primary as={Link} to='/'>Go Home</Button>
                <Button as={Link} to='media-center/vacancies' positive>Go to vacancy page</Button>
            </Segment.Inline>
        </Segment>
    </AboutContainer>
</>;

export default Tenders;