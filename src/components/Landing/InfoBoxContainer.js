import React from 'react';
import InfoBox from './InfoBox';

const InfoBoxContainer = () => {
    const boxOneContent = "box 1";
    const boxTwoContent = "box 2";
    const boxThreeContent = "box 3";

    return(
        <div>
            <InfoBox content={boxOneContent}/>
            <InfoBox content={boxTwoContent}/>
            <InfoBox content={boxThreeContent}/>
        </div>
    )
}

export default InfoBoxContainer;