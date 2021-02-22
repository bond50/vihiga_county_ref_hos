import React from 'react';
import MyLink from "./link/Link";

const Home = ({clicked}) => (
    <MyLink to='/' text='home' clicked={clicked}/>
)

export default Home;
