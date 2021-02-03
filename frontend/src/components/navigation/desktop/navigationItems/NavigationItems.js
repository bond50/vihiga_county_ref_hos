import React from 'react';
import './NavigationItems.css'
import {Container, Header, Menu} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function mapStateToProps(state) {
    return {
        fixed: state.fixed.fixed
    }
}


const NavigationItems = ({handleToggleDropdownMenu, dropdownMenuStyle, fixed}) => (
    <Menu
        fixed={fixed ? 'top' : null}
        inverted={fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='huge'
    >
        <Container>
            <Menu.Item header as={Link} to='/'>
                VCRH
            </Menu.Item>
            <div className="dropdown" onClick={handleToggleDropdownMenu}>
                <a className="item">Mega menu<i className="dropdown icon"/></a>
                <div style={dropdownMenuStyle} className='megamenu'>
                    <Container>
                        <div className="ui four column relaxed equal height divided doubling grid">
                            <div className="column">
                                <Header as='h4'>Gab</Header>
                                <div className="ui link list">
                                    <a className="item">Viscose</a>
                                </div>
                                <Header as='h4'>Gab</Header>
                                <div className="ui link list">
                                    <a className="item">Cashmere</a>
                                    <a className="item">Linen</a>
                                    <a className="item">Cotton</a>
                                </div>
                            </div>
                            <div className="column">
                                <Header as='h4'>Gab</Header>
                                <div className="ui link list">
                                    <a className="item">Small</a>
                                    <a className="item">Medium</a>
                                    <a className="item">Large</a>
                                    <a className="item">Plus Sizes</a>
                                </div>
                            </div>
                            <div className="column">
                                <Header as='h4'>Gab</Header>
                                <div className="ui link list">
                                    <a className="item">Neutrals</a>
                                    <a className="item">Brights</a>
                                    <a className="item">Pastels</a>
                                </div>
                            </div>
                            <div className="column">
                                <Header as='h4'>Gab</Header>
                                <div className="ui link list">
                                    <a className="item">Knitwear</a>
                                    <a className="item">Outerwear</a>
                                    <a className="item">Pants</a>
                                    <a className="item">Shoes</a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div>
                <a className="item">
                    Item 1
                </a>
            </div>
        </Container>

    </Menu>


)


export default connect(mapStateToProps)(NavigationItems);