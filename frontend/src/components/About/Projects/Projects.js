import React from 'react';
import AboutContainer from "../AboutContainer";
import {List} from "semantic-ui-react";


const Projects = () => <AboutContainer title='Projects'>

        <p>Current Projects at Vihiga County Referral Hospital are:</p>
        <List as='ol' style={{fontSize:'1.33em'}}>
            <List.Item as='li'>Hospital plaza</List.Item>
            <List.Item as='li'>Funeral Home</List.Item>
        </List>
</AboutContainer>;

export default Projects;