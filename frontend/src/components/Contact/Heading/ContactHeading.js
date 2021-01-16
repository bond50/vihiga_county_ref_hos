import React from 'react';
import {Container} from "semantic-ui-react";
import classes from './ContactHeading.module.css';
import HeadingTemplate from "../../HeadingTemplate/HeadingTemplate";

const Heading = ({title}) => (
    <HeadingTemplate>
        <div className={classes.navImage}>
            {/*tune.come*/}
            <Container text >
                <h1 className={classes.header}>
                    {title}
                </h1>
            </Container>
        </div>
    </HeadingTemplate>


)

export default Heading;