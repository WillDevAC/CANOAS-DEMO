import React from "react";

import Slider from "react-slick";

import { settings } from "../../utils/galleryslider";

import { Container, SectionImg} from "./styles";

const Galery: React.FC = () => {
  return (
    <Container>
      <Slider {...settings}>
        <SectionImg>
          <img src="https://dummyimage.com/400x300/d9d9d9/fff" alt="" />
        </SectionImg>
        <SectionImg>
          <img src="https://dummyimage.com/400x300/d9d9d9/fff" alt="" />
        </SectionImg>
        <SectionImg>
          <img src="https://dummyimage.com/400x300/d9d9d9/fff" alt="" />
        </SectionImg>
        <SectionImg>
          <img src="https://dummyimage.com/400x300/d9d9d9/fff" alt="" />
        </SectionImg>
        <SectionImg>
          <img src="https://dummyimage.com/400x300/d9d9d9/fff" alt="" />
        </SectionImg>
      </Slider>
    </Container>
  );
};

export default Galery;
