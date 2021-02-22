import React from 'react';
import MyLink from "./link/Link";

const Tender = ({clicked}) => (
    <MyLink to='/tenders' text='Tenders' clicked={clicked}/>
)

export default Tender;
