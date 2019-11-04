import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";

import CustomCardSlide from "./CardSlide";
import CustomDotGroup from "./DotGroup";

import pivot from '../../assets/Pivot-table-screenshot.png';
import api from '../../assets/api-call-2.png';
import { object } from 'prop-types';
import { version } from 'moment';


const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.25}
    totalSlides={3}
    style={{ width: "300px" }}
  >
    <Slider>
      <CustomCardSlide
        image="https://place-hold.it/800x800&text=Matthew&fontsize=32"
        index={0}
        header="Matthew House"
        meta="Friend"
      />
      <CustomCardSlide
        header="Elliot Baker"
        image="https://place-hold.it/800x800&text=Elliot&fontsize=32"
        index={1}
        meta="Friend"
      />
      <CustomCardSlide
        header="Steve Sanders"
        image="https://place-hold.it/800x800&text=Steve&fontsize=32"
        index={2}
        meta="Friend"
      />
    </Slider>

    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default CardCarousel;

// UncontrolledCarousel.propTypes = {
//   items: PropTypes.array.isRequired,
//   indicators: PropTypes.bool, // default: true
//   controls: PropTypes.bool, // default: true
//   autoPlay: PropTypes.bool, // default: true
// };







// OBJECTIVES
// ------------------
// UPDATE THE NAVBAR TO LOOK JUST LIKE THE SAUTI DOT ORG

// ADD PICTURES TO CAROUSEL
//   -Pivot table
//   -json object
//   -market json
// MAKE PAGE RESPONSIVE
//   -tablet version
//   -mobile --optional
// ADD CONTENT TO CARDS


