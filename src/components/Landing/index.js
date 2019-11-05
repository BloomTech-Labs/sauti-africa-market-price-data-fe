// import React from "react";

// import TopCard from "./Card.js";
// import InfoBoxContainer from "./InfoBoxContainer.js";
// import "./Landing.scss";

// const Landing = () => {
//   return (
//     <>
//       <div className="top-div-image">
//         <div className="top-div">
//           <div className="cardDiv">
//             <TopCard className="card" />
//           </div>
//         </div>
//       </div>
//       <div className="bot-div">
//         <InfoBoxContainer />
//       </div>
//     </>
//   );
// };

import React from "react";

import Header from "./header";
import Main from "./main";

import "./Landing.scss";

const Landing = () => {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};

export default Landing;
