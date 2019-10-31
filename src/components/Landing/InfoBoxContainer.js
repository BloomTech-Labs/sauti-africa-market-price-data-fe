import React from 'react';
import InfoBox from './InfoBox.js';

const InfoBoxContainer = () => {
    const boxOneTitle = "Database";
    const boxTwoTitle = "API";
    const boxThreeTitle = "Fireable Table";

    const boxOneContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra ipsum nunc. Tristique nulla aliquet enim tortor. ";
    const boxTwoContent = "Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Nibh mauris cursus mattis molestie a iaculis. In fermentum posuere urna nec tincidunt. Praesent tristique magna sit amet purus.";
    const boxThreeContent = "Diam quis enim lobortis scelerisque fermentum. Velit scelerisque in dictum non consectetur a. Nunc sed velit dignissim sodales ut. At urna condimentum mattis pellentesque id nibh tortor.";

    return(
        <div className="three-boxes">
            <div className="info-box">
                    {/* icon place */}
                <InfoBox title={boxOneTitle} content={boxOneContent}/>
            </div>
            <div className="info-box">
                    {/* icon place */}
                <InfoBox title={boxTwoTitle} content={boxTwoContent}/> 
            </div>
            <div className="info-box">
                    {/* icon place */}
                <InfoBox title={boxThreeTitle} content={boxThreeContent}/>
            </div>  
        </div>
    )
}

export default InfoBoxContainer;