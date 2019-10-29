import React from 'react';

import Card from './Card.js';
import Carousel from './Carousel.js';
import InfoBoxContainer from './InfoBoxContainer.js';
import './Landing.scss';

const Landing = () => {


    return (
        <>
            <div className="top-div">
                <Card/>
                <Carousel/>
            </div>
            <div>
                <InfoBoxContainer/>
            </div>
        </>

    )

}



export default Landing;