import React from 'react';
import InfoBox from './InfoBox';

const InfoBoxContainer = () => {
    const boxOneContent = "box 1";
    const boxTwoContent = "box 2";
    const boxThreeContent = "box 3";

    return(
        <div className="three-boxes">
            <div className="info-box">
                    {/* icon place */}
                <InfoBox content={boxOneContent}/>
            </div>
            <div className="info-box">
                    {/* icon place */}
                <InfoBox content={boxTwoContent}/> 
            </div>
            <div className="info-box">
                    {/* icon place */}
                <InfoBox content={boxThreeContent}/>
            </div>  
        </div>
    )
}

export default InfoBoxContainer;