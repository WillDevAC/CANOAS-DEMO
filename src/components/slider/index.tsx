import React from "react";

import Slider from "react-slick";

import { SliderItem } from "./styles";

import { settings } from "../../utils/sliderconfig";

const slider: React.FC = () => {
  return (
    <div>
      <Slider {...settings}>
        <SliderItem>
          <img src="images/slider1.png" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="images/slider1.png" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="images/slider1.png" alt="" />
        </SliderItem>
      </Slider>
    </div>
  );
};

export default slider;