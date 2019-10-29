import React from 'react';



const InfoBox = (props) => {
    return (
        <div className="info-box">
            <h3>
                {props.content}
            </h3>
         </div>
    )
}

export default InfoBox;