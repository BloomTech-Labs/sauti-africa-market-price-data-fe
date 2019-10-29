import React from 'react';

import TopCard from './Card.js';
import Carousel from './Carousel.js';
import InfoBoxContainer from './InfoBoxContainer.js';
import './Landing.scss';

const Landing = () => {


    return (
        <>
            <div className="top-div-image">
                <div className="top-div">
                    <div className="card">
                        <TopCard/>
                    </div>
                    <div className="carousel">
                        <Carousel/>
                    </div>
                </div>
            </div>
            <div className="bot-div">
                <InfoBoxContainer/>
            </div>
        </>

    )

}



export default Landing;