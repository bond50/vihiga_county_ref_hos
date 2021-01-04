import React from 'react';
import {Header} from "semantic-ui-react";

const YearsOperated = () => {
    const getYears = () => {
        let date1 = new Date("January 1, 2002 12:00:00");
        let date2 = new Date();
        return date2.getFullYear() - date1.getFullYear()
    };


    return (

            <Header as='h4' inverted>
                 {getYears()} Years Of Service
            </Header>

    );
};

export default YearsOperated;

