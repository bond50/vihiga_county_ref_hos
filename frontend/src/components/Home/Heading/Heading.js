import React from 'react';
import {Container} from "semantic-ui-react";
import classes from './Heading.module.css';
import HeadingTemplate from "../../HeadingTemplate/HeadingTemplate";

const Heading = () => (
    <HeadingTemplate >
        <div className={classes.navImage}>
            <Container text>
                <h1 className={classes.header} >
                    we take care of your precious health
                </h1>
            </Container>
        </div>
    </HeadingTemplate>


)

export default Heading;