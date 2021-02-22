import React, {Fragment} from 'react';
import {Container, Grid, Menu} from "semantic-ui-react";
import MyDropdown from "../dropdown/myDropdown";
import About from '../links/About';
import Services from '../links/Services';
import Media from '../links/Media';
import Covid from '../links/Covid';
import Contact from '../links/Contact';
import Home from '../links/Home';
import Tenders from '../links/Tenders';
import Training from '../links/Training';
import {connect} from "react-redux";
import './Desktop.css'

function mapStateToProps(state) {
    return {
        fixed: state.fixed.fixed
    }
}


const Desktop = ({fixed}) => {
    return (

            <Grid padded className="tablet computer only">
                <Menu
                    borderless
                    fluid
                    className={fixed?'fixedStyle':'notFixed'}
                    fixed={fixed ? 'top' : null}
                    size="medium">
                    <Container>
                        <Home/>
                        <MyDropdown title='About us'>
                            <About/>
                        </MyDropdown>
                        <MyDropdown title='Services'>
                            <Services/>
                        </MyDropdown>
                        <MyDropdown title='Media'>
                            <Media/>
                        </MyDropdown>
                        <Tenders/>
                        <Training/>
                        <Contact/>
                        <MyDropdown title='Covid'>
                            <Covid/>
                        </MyDropdown>
                    </Container>
                </Menu>
            </Grid>

    );
};

export default connect(mapStateToProps)(Desktop);