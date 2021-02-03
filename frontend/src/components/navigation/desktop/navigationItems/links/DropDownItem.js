import React from 'react';
import {Container, Grid, Header, List} from "semantic-ui-react";
import './DropDownItem.css'

const DropDownItem = ({dropdownMenuStyle, handleToggleDropdownMenu, text}) => (
    <div className="dropdown" onClick={handleToggleDropdownMenu}>
        <a className="item">{text}<i className="dropdown icon"/></a>
        <div style={dropdownMenuStyle} className='megamenu'>
            <Container>
                <Grid columns='equal' relaxed divided doubling>
                    <Grid.Column>
                        <Header as='h4'>Gab</Header>
                        <List link>
                            <a className="item">Viscose</a>
                        </List>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    </div>
);

export default DropDownItem;