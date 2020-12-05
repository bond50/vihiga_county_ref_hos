import React from 'react';
import {Link} from 'react-router-dom';
import './404.css'
import AboutContainer from "./About/AboutContainer";
import {Button, Header} from "semantic-ui-react";

const NotFound = () => (
    <AboutContainer >
        <div style={{textAlign:'center'}}>
              <Header as='h1' style={{fontSize:'80px'}}>404</Header>
        <div className="four_zero_four_bg"/>

            <Header as='h4' style={{fontSize:'40px'}}>Page Not Found!</Header>

            <Button as={Link} to="/"  positive>
                Go Home
            </Button>
        </div>

    </AboutContainer>
);

export default NotFound;