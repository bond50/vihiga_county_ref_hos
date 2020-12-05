import React from 'react';
import AboutContainer from "../About/AboutContainer";
import  hand from '../../assets/hand/hand.gif'



const Hand = () =>
    <AboutContainer title='How to wash Your Hands<'>
        <p style={{textTransform: 'capitalize'}}>Wash your hands when visibly
            soiled! otherwise use handrub
        </p>
        <p className='far fa-clock w3-small ' style={{textTransform: 'capitalize'}}>{' '}duration
            of entire process: 40-60 seconds
        </p>

        <div className='w3-container'>
            <img src={hand} alt="hand" style={{maxWidth: '100%'}}/>
        </div>

        <div className='w3-row w3-small w3-margin-top'>
            <div className='w3-half w3-padding'>
                <div className="w3-container">
                    <h3>Hand Care</h3>
                <p>Take care of your hands by regularly using a protective hand cream or
                    lotion,at least daily
                </p>

                <p> Do not routinely wash hand with soap and water immediately before or after an
                    alcohol based handrub </p>
                <p> Do not use water to rinse your hand</p>
                <p>After handrubbing or handwashing, let you hands dry complitely before putting on
                    gloves
                </p>
                </div>
            </div>
            <div className="w3-half w3-container  w3-padding">
               <div className="w3-container">
                    <h3>Please remember</h3>
                <p> Do not wear artificial fingernails or extenders when in direct contact with
                    patients</p>
                <p> Keep natural nail short</p>
               </div>
            </div>
        </div>

    </AboutContainer>

export default Hand;