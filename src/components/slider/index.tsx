import React from "react";

import Slider from "react-slick";

import { SliderItem } from "./styles";

import { settings } from "../../utils/sliderconfig";

const slider: React.FC = () => {
  return (
    <div id="home" className="home">
      <Slider {...settings}>
        <SliderItem>
          <img src="images/mainslider2.webp" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="images/mainslider1.webp" alt="" />
        </SliderItem>
      </Slider>
    </div>
  );
};

export default slider;
