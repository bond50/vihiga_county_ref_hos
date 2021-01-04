import React from 'react';
import Slider from "react-slick";
import {Container, Header, Segment} from "semantic-ui-react";

const Slick = () => {
    const slickSettings = {
        autoPlay: true,
        dots: true,
        speed: 500
    }
    return (
        <Slider  {...slickSettings} className='slide'>
            <Segment inverted verticalAlign='center'>
                <Container className='active'>
                    <Header as='h1'>
                        hello
                    </Header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti, dolore eius esse
                        eum facere iure laborum nihil numquam obcaecati officiis quae quaerat, quas quasi recusandae
                        sequi suscipit, tempora vitae.
                    </p>
                </Container>

            </Segment>
            <Segment inverted verticalAlign='center' style={{backgroundColor:'#777'}}>
                <Container className='active'>
                    <Header as='h1'>
                        hello
                    </Header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti, dolore eius esse
                        eum facere iure laborum nihil numquam obcaecati officiis quae quaerat, quas quasi recusandae
                        sequi suscipit, tempora vitae.
                    </p>
                </Container>

            </Segment>
        </Slider>
    );
};

export default Slick;