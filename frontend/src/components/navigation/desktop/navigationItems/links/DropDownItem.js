import React from 'react';
import {Container, Grid, Header, List} from "semantic-ui-react";


const DropDownItem = ({data}) => {
    return (
        <div className="ui four column relaxed equal height divided doubling grid">
            <div className="column">
                <div className="ui link list">
                    <a className="item">Viscose</a>
                </div>
                <div className="ui link list">
                    <a className="item">Cashmere</a>
                    <a className="item">Linen</a>
                    <a className="item">Cotton</a>
                </div>
            </div>
            <div className="column">
                <div className="ui link list">
                    <a className="item">Small</a>
                    <a className="item">Medium</a>
                    <a className="item">Large</a>
                    <a className="item">Plus Sizes</a>
                </div>
            </div>
            <div className="column">

                <div className="ui link list">
                    <a className="item">Neutrals</a>
                    <a className="item">Brights</a>
                    <a className="item">Pastels</a>
                </div>
            </div>
            <div className="column">
                <div className="ui link list">
                    <a className="item">Knitwear</a>
                    <a className="item">Outerwear</a>
                    <a className="item">Pants</a>
                    <a className="item">Shoes</a>
                </div>
            </div>
        </div>


    );
};

export default DropDownItem;